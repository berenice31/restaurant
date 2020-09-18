import Service from './service'

export default function (app) {
  app.use('/countries', new Service(app))
}
