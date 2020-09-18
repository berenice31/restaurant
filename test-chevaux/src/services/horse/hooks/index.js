import { iff, iffElse, isNot, isProvider, disallow } from 'feathers-hooks-common'
import * as hooks from './horse.hooks'

export const before = {
  all: [],
  find: [
    hooks.log(1),
    hooks.log(2),
  ],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
}

export const after = {
  all: [],
  find: [

  ],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
}

export const error = {
  all: [
    // handleErrorMessage()
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
}

export default {
  before,
  after,
  error
}
