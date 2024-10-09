import { Request, Response, Router } from 'express'
import { createJsonResponse, JsonResponse } from './controller-utils'
import { Weather } from '../../weather/domain/entity/weather'
import { weather } from '../../modules'

export const router = Router()

/**
 * @openapi
 * components:
 *  schemas:
 *    WeatherDTO:
 *      type: object
 *      properties:
 *        description:
 *          type: string
 *        temperature:
 *          type: number
 *        humidity:
 *          type: integer
 *        wind_speed:
 *          type: number
 */
export interface WeatherDTO {
  description: string | undefined
  temperature: number | undefined
  humidity: number | undefined
  wind_speed: number | undefined
}

/**
 * @openapi
 * /weather/current:
 *  get:
 *    description: Returns current weather in city passed in query.
 *    responses:
 *      200:
 *        description: Weather response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: integer
 *                data:
 *                  $ref: "#/components/schemas/WeatherDTO"
 *
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
  '/current',
  async (req: Request, res: Response<JsonResponse<WeatherDTO>>) => {
    try {
      const { location } = req.query

      if (!location) {
        res.status(400)
        res.send()
        return
      }

      const data = await weather.getCurrentWeather(location as string)

      res.status(200)
      res.json(createJsonResponse<WeatherDTO>(weatherToDTO(data)))
    } catch (err) {
      res.status(500)
      res.send()
    }
  },
)

const weatherToDTO = (weather: Weather): WeatherDTO => ({
  description: weather.description,
  temperature: weather.temperature,
  humidity: weather.humidity,
  wind_speed: weather.windSpeed,
})
