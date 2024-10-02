import express, { Application } from 'express'
import { helloRouter } from '../hello/infra/server/hello.controller'

export default function createServer(): Application {
  const app: Application = express()
  // configure(app)

  // Router
  app.use('/', helloRouter)

  return app
}

// const configure = (app: Application): void => {
//   // Configure server
//   // Uncomment this line to enable ejs template engine
//   // app.set('view engine', 'ejs')
//   // Uncomment this line to enable public assets folder
//   // app.use('/public', express.static('public'))
// }
