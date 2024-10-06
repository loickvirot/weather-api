import { Request, Response, Router } from 'express'
import { json } from '../../common/controller-utils/controller-utils'
import { getForecastForCity } from '../../forecast/module'

export const router = Router()

/**
 * @openapi
 * components:
 *  schema:
 *    Forecast:
 *      type: object
 *      properties:
 *        status: integer
 *
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
 *                  type: integer
 *                data:
 *                  type: object
 *                  properties:
 *                    evolution:
 *                      type: string
 *                    temperature:
 *                      type: string
 *                    pressure:
 *                      type: string
 *                    windForceAverage:
 *                      type: integer
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
router.get('/forecast', async (req: Request, res: Response) => {
  const { location } = req.query

  if (!location) {
    res.status(400)
    res.send()
    return
  }

  json(res, await getForecastForCity(location as string))
})
