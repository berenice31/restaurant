import { createLogger, format, transports as Transports } from 'winston'
import os from 'os'

const transports = [
  new Transports.Console(),
]

// Doc : https://github.com/winstonjs/winston
const logger = createLogger({
  // To see more detailed errors, change this to 'debug'
  level: process.env.DEBUG_LEVEL || 'error',
  format: format.combine(
    format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss'
    }),
    format.splat(),
    // format.simple(),
    format.printf(info => {
      return `[${info.timestamp}] ${info.level}: ${info.message} `
    })
  ),
  transports,
})

export default logger
