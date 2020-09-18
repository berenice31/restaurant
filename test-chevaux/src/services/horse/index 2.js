import { multer, getFiles } from '@middleware/uploads/upload.middleware'
import Service from './service/horse.service'
import createModel from './model/horse.model'
import setupChannel from './channels/horse.channel'
import hooks from './hooks'

export default function (app) {
  const config = {
    Model: createModel(app),
    paginate: {
      default: 25,
      max: 25
    }
  }

  app.use('/horses', new Service(config))

  app.service('horses').hooks(hooks)

  setupChannel(app)
}
