import mongoose from 'mongoose'
import createConnection from './mongo/create-connection'

mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)

export default function (app) {
  const horses = createConnection('horses', process.env.MONGO_URL, process.env.MONGO_DB)

  app.set('databases', {
    horses,
  })
}
