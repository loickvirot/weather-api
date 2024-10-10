import express, { Application } from 'express'
import { router as weatherRouter } from './controller/weather'
import { router as forecastRouter } from './controller/forecast'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import config from '../config'

export default function createServer(): Application {
  const app: Application = express()

  // Router
  app.use('/weather', weatherRouter)
  app.use('/weather', forecastRouter)

  const swaggerSpec = swaggerJSDoc({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Weather API',
        version: '1.0.0',
      },
      servers: [
        {
          url: config.baseUrl,
        },
      ],
    },
    apis: [__dirname + '/controller/*.ts', __dirname + '/controller/*.js'],
  })
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  return app
}
