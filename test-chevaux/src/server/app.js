import { Forbidden } from '@feathersjs/errors'
import Events from 'events'
import moment from 'moment'
import 'moment-timezone'

import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import logger from '@monitoring/logger'

import feathers from '@feathersjs/feathers'
import configuration from '@feathersjs/configuration'
import express from '@feathersjs/express'
import socketio from '@feathersjs/socketio'

import services from '@services'
import globalHooks from '@hooks/app'

import channels from './channels'

import database from '@database'

moment.tz.setDefault('Europe/Paris')
Events.EventEmitter.defaultMaxListeners = Infinity

const app = express(feathers())

app.configure(configuration())

app.use(helmet())
app.use(cors())
app.use(compress())

app.use(express.json({
  limit: '20mb'
}))

app.use(express.urlencoded({ 
  limit: '100mb',
  extended: true 
}))

app.configure(express.rest())

app.configure(socketio({
  path: `/ws/`
}, function(io) {
  io.sockets.setMaxListeners(150) 

  io.use(function (socket, next) {
    socket.feathers.headers = socket.request.headers || { 
      referer: socket.request.referrer 
    }

    next()
  })
}))

app.use(function(req, res, next) {
  if (req.feathers) {
    req.feathers.ip = req.headers['x-real-ip']
  }

  if (req.rawBody) {
    req.feathers.raw = req.rawBody
  }

  next()
})

app.use(function(req, res, next) {
  function convert (query) {
    for (const key in query) {
      if (query.hasOwnProperty(key)) {
        const value = query[key]
        
        if (key === '$sort') {
          query[key] = convert(query[key])
        } else {
          if (value === 'true') {
            query[key] = true
          } else if (value === 'false') {
            query[key] = false
          }
  
          if (value === '1') {
            query[key] = 1
          } else if (value === '-1') {
            query[key] = -1
          }
        }
      }
    }

    return query
  }

  if (req.query) {
    req.query = convert(req.query)
  }

  next()
})

app.configure(database)

app.configure(services)
app.configure(channels)

app.use(express.notFound())
app.use(express.errorHandler({ logger }))

app.hooks(globalHooks)

export default app
