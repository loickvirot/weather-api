import express, { type Request, type Response } from 'express'
import { getData } from '../../application/get-data/get-data'
import { json } from '../../../common/controller-utils/controller-utils'

export const helloRouter = express.Router()

helloRouter.get('/', (req: Request, res: Response): void => {
  try {
    const name: string = (req.query.name as string) ?? 'world'
    const data = getData(name)
    json(res, data)
  } catch (err) {
    json(res, {}, 404)
  }
})
