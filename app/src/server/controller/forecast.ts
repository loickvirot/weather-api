import { Request, Response, Router } from 'express'
import { createJsonResponse, JsonResponse } from './controller-utils'
import { forecastModule } from '../../forecast/module'
import { Forecast } from '../../forecast/domain/entity/forecast'

export const router = Router()

/**
 * @openapi
 * components:
 *  schemas:
 *    ForecastDTO:
 *      type: object
 *      properties:
 *        evolution:
 *          type: string
 *        temperature:
 *          type: string
 *        pressure:
 *          type: string
 *        wind_force_average:
 *          type: integer
 */
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
 *                  $ref: "#/components/schemas/ForecastDTO"
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
    const { location } = req.query

    if (!location) {
      res.status(400)
      res.send()
      return
    }

    const data = await forecastModule.getForecastForCity(location as string)

    res.status(200)
    res.json(createJsonResponse(forecastToDTO(data)))
  },
)

const forecastToDTO = (forecast: Forecast): ForecastDTO => ({
  evolution: forecast.evolution,
  temperature: forecast.temperature,
  pressure: forecast.pressure,
  wind_force_average: forecast.windForceAverage,
})
