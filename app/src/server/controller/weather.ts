import { Request, Response, Router } from 'express'
import { json } from '../../common/controller-utils/controller-utils'
import { getWeather } from '../../weather/app/query/get-weather'
import { mockWeatherReposiory } from '../../weather/infra/weather-api/mock'

export const router = Router()

router.get('/current', async (req: Request, res: Response) => {
  const { city } = req.query

  if (!city) {
    res.status(400)
    res.send()
    return
  }

  json(res, await getWeather('toulouse', mockWeatherReposiory))
})
