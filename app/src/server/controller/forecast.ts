import { Request, Response, Router } from 'express'
import { json } from '../../common/controller-utils/controller-utils'
import { getForecastForCity } from '../../forecast/module'

export const router = Router()

router.get('/forecast', async (req: Request, res: Response) => {
  const { location } = req.query

  if (!location) {
    res.status(400)
    res.send()
    return
  }

  json(res, await getForecastForCity(location as string))
})
