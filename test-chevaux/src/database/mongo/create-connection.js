import mongoose from 'mongoose'
import Debug from '@debug'

const debug = Debug('database/connection')

export default function (name, url, db) {
  const connection = mongoose.createConnection(url, { 
    useCreateIndex: true, 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  connection.once('connected', () => {
    debug.log(`Connected to mongodb (${name})`)
  })

  return connection.useDb(db)
}