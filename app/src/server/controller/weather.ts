import { Request, Response, Router } from 'express'
import { json } from '../../common/controller-utils/controller-utils'
import { getCurrentWeather } from '../../weather/module'

export const router = Router()

router.get('/current', async (req: Request, res: Response) => {
  const { city } = req.query

  if (!city) {
    res.status(400)
    res.send()
    return
  }

  json(res, await getCurrentWeather('toulouse'))
})
