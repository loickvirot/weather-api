import { describe, expect, test } from '@jest/globals'
import createServer from '../server'
import request from 'supertest'

const server = createServer()

describe('Forecast controller', () => {
  test('/weather/forecast?location=toulouse should return Forecast', async () => {
    const res = await request(server).get('/weather/forecast?location=toulouse')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({
      status: 200,
      data: {
        evolution: 'increase',
        pressure: 'increase',
        temperature: 'increase',
        windForceAverage: 3,
      },
    })
  })

  test('/weather/current should return 400 when there is no city', async () => {
    const res = await request(server).get('/weather/forecast')
    expect(res.statusCode).toBe(400)
    expect(res.body).toEqual({})
  })
})
