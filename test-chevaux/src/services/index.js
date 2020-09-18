import mongoose from 'mongoose'
import init from './init'
import seed from './seed'

import CountryService from './countries' 
import HorseService from './horse' 

import Debug from '@debug'

const debug   = Debug('@api:error/mongoose')
const initlog = Debug('@api:init')

export default function () {
  const app = this

  if (process.env.DEBUG && process.env.DEBUG.match(/(,)*mongoose/)) {
    mongoose.set('debug', true)
  }

  app.configure(CountryService)
  app.configure(HorseService)

  init(app)
  seed(app)
}
