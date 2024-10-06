import { Request, Response, Router } from 'express'
import { json } from '../../common/controller-utils/controller-utils'
import { getCurrentWeather } from '../../weather/module'

export const router = Router()

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
 *                  type: object
 *                  properties:
 *                    description:
 *                      type: string
 *                    temperature:
 *                      type: number
 *                    humidity:
 *                      type: integer
 *                    windSpeed:
 *                      type: number
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
router.get('/current', async (req: Request, res: Response) => {
  const { location } = req.query

  if (!location) {
    res.status(400)
    res.send()
    return
  }

  json(res, await getCurrentWeather(location as string))
})
