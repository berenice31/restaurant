import Debug from 'debug'

Debug.enable(process.env.DEBUG)

export default function (name = '', namespace = '@api') {
  return {
    log: Debug(`${namespace}:log/${name}`),
    trace: Debug(`${namespace}:trace/${name}`),
    error: Debug(`${namespace}:error/${name}`),
    init: Debug(`${namespace}:init`),
    testing: Debug(`${namespace}:testing`)
  }
}
