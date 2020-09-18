export default function (app) {
  app.service('horses').publish(data => {
    return app.channel('everybody')
  })
}