import app from '@server/app'
import request from 'superagent'
import url from 'url'
import seed from '@services/seed'
import { expect, assert, should } from 'chai'

import useFlagService from './services/flag/creation'

const port = app.get('port') || process.env.PORT || 8998
const getUrl = pathname => url.format({
  hostname: app.get('host') || 'localhost',
  protocol: 'http',
  port,
  pathname
})

async function sleep (duration = 2000) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

function waitsApp () {
  return new Promise(async resolve => {
    let notReady = true
    let count = 0

    while (notReady) {
      if (count > 10) {
        process.exit(1)
      }
      
      try {
        await app.service('health').find()

        notReady = false
      } catch (error) {

      }  

      count++

      await sleep()
    }

    resolve()
  })
}

let server = null
let isReady = waitsApp()

before(done => {
  server = app.listen(port)

  Promise.all([
    isReady.then(() => seed(app)),
    // sleep(10000)
  ]).then(() => {
    console.log(`Seed done`)

    done()
  })
})

after(done => {
  Promise.all([
    app.service('flags').Model.deleteMany({}),
  ]).then(results => {
    server && server.close()
        
    done()
  })
})

describe(`Ajout de drapeaux\n`, useFlagService(app))
