import { Schema } from 'mongoose'
import ModelSchema from './horse.schema'

export default function (app) {
  const modelName = 'horse'
  const MongoClient = app.get('databases').horses

  const schema = new Schema(ModelSchema, { 
    timestamps: true,
  })

  return MongoClient.model(modelName, schema)
}
