import logger from '../logger'
import Debug from 'debug'

Debug.enable(process.env.DEBUG)

export default function (name = '', namespace = '@api') {
  const log = Debug(`${namespace}:log/${name}`)
  const trace = Debug(`${namespace}:trace/${name}`)
  const error = Debug(`${namespace}:error/${name}`)
  const init = Debug(`${namespace}:init`)
  const testing = Debug(`${namespace}:testing`)

  return {
    log: (...args) => {
      logger.log('info', ...args)
      return log(...args)
    },
    trace: (...args) => {
      return trace(...args)
    },
    error: (...args) => {
      logger.log('error', ...args)
      return error(...args)
    },
    init: (...args) => {
      return init(...args)
    },
    testing: (...args) => {
      return testing(...args)
    }
  }
}
