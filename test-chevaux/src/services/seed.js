import Debug from '@debug'
// import seed[ServiceName] from './pricing/services/[servicename]/model/servicename.seed'

let seedProcess = null 

export default function seed (app) {  
  if (!seedProcess) {
    const seeds = [
      // seed[ServiceName](app)
    ]

    if (['localhost', 'test'].includes(process.env.NODE_ENV)) {

    }

    seedProcess = Promise.all(seeds)
  }

  return seedProcess
}