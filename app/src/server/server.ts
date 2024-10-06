import express, { Application } from 'express'
import { helloRouter } from '../hello/infra/server/hello.controller'
import { router as weatherRouter } from './controller/weather'
import { router as forecastRouter } from './controller/forecast'

export default function createServer(): Application {
  const app: Application = express()

  // Router
  app.use('/', helloRouter)
  app.use('/weather', weatherRouter)
  app.use('/weather', forecastRouter)

  return app
}
