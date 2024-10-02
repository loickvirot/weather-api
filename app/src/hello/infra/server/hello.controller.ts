import express, { type Request, type Response } from 'express'
import { getData } from '../../application/get-data/get-data'
import controllerUtils from '../../../common/controller-utils/controller-utils'

export const helloRouter = express.Router()

helloRouter.get('/', (req: Request, res: Response): void => {
  try {
    const name: string = (req.query.name as string) ?? 'world'
    const data = getData(name)
    controllerUtils.json(res, data)
  } catch (err) {
    controllerUtils.json(res, {}, 404)
  }
})
