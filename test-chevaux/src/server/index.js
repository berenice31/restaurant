import logger from '@monitoring/logger'
import app from './app'

const port = app.get('port')
let server = null

process.on('unhandledRejection', (reason, p) =>
  console.log('Unhandled Rejection at: Promise ', p, reason)
)

server = app.listen(port)

server.on('listening', () =>
  logger.info(`Server started on http://%s:%d`, app.get('host'), port)
)

export default server
