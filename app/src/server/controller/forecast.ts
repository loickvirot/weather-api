import { Request, Response, Router } from 'express'
import { createJsonResponse, JsonResponse } from './controller-utils'
import { Forecast } from '../../forecast/domain/entity/forecast'
import { forecast } from '../../modules'

export const router = Router()

interface ForecastDTO {
  evolution: string
  temperature: string
  pressure: string
  wind_force_average: number
}

/**
 * @openapi
 * /weather/forecast:
 *  get:
 *    description: Returns weather trend analysis based on next 7 days forecast.
 *    responses:
 *      200:
 *        description: Forecast response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: number
 *                data:
 *                  type: object
 *                  properties:
 *                    evolution:
 *                      type: string
 *                    temperature:
 *                      type: string
 *                    pressure:
 *                      type: string
 *                    wind_force_average:
 *                      type: integer
 *      400:
 *        description: No location
 *    parameters:
 *      - name: location
 *        in: query
 *        description: City where you want the forecast
 *        required: true
 *        schema:
 *          type: string
 *
 */
router.get(
  '/forecast',
  async (req: Request, res: Response<JsonResponse<ForecastDTO>>) => {
    try {
      const { location } = req.query

      if (!location) {
        res.status(400)
        res.send()
        return
      }

      const data = await forecast.getForecastForCity(location as string)

      res.status(200)
      res.json(createJsonResponse(forecastToDTO(data)))
    } catch (err) {
      res.status(500)
      res.send()
    }
  },
)

const forecastToDTO = (forecast: Forecast): ForecastDTO => ({
  evolution: forecast.evolution,
  temperature: forecast.temperature,
  pressure: forecast.pressure,
  wind_force_average: forecast.windForceAverage,
})
