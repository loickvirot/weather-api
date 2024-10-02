import { type Response } from 'express'

export default {
  json(res: Response, data: unknown, status: number = 200): void {
    res.status(status)
    res.json({
      status,
      data,
    })
  },
}
