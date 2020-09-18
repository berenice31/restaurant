import Debug from 'src/services/horse/service/@debug'

const debug = Debug('channels')

export default function () {
  const app = this

  app.on('connection', connection => {
    app.channel('everybody').join(connection)
  })
}
