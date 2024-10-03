import { describe, expect, test } from '@jest/globals'
import createServer from '../server'
import request from 'supertest'

const server = createServer()

describe('Weather controller', () => {
  test('/weather/current?city=toulouse should return Weather', async () => {
    const res = await request(server).get('/weather/current?city=toulouse')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({
      status: 200,
      data: {
        description: 'test',
        temperature: 10,
        humidity: 0.1,
        windSpeed: 20,
      },
    })
  })

  test('/weather/current should return 400 when there is no city', async () => {
    const res = await request(server).get('/weather/current')
    expect(res.statusCode).toBe(400)
    expect(res.body).toEqual({})
  })
})
