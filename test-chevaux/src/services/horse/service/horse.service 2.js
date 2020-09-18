import { Service as MongooseService } from 'feathers-mongoose'
import { NotFound } from '@feathersjs/errors'
import Debug from '@debug'

const debug = Debug('horses')

export default class Service extends MongooseService {
  setup (app) {
    debug.init('Setup horses')
  }

  find (params) {
    if (!params.query?.$sort) {
      if (!params.query) {
        params.query = {}
      }

      params.query.$sort = { country: 1 }
    }

    return super._find(params)
  }
}
