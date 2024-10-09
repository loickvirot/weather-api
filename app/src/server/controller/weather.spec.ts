import { describe, expect, jest, test } from '@jest/globals'
import createServer from '../server'
import request from 'supertest'
import { weather } from '../../modules'

const server = createServer()

describe('Weather controller', () => {
  test('/weather/current?location=toulouse should return Weather', async () => {
    const res = await request(server).get('/weather/current?location=toulouse')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({
      status: 200,
      data: {
        description: 'Broken clouds',
        temperature: 13.85,
        humidity: 75,
        wind_speed: 5.85,
      },
    })
  })

  test('/weather/current should return 400 when there is no city', async () => {
    const res = await request(server).get('/weather/current')
    expect(res.statusCode).toBe(400)
    expect(res.body).toEqual({})
  })

  test('/weather/current should return 500 when there is an error thrown in code', async () => {
    const mock = jest
      .spyOn(weather, 'getCurrentWeather')
      .mockImplementation(async () => {
        throw new Error('error')
      })

    const res = await request(server).get('/weather/current?location=toulouse')
    expect(mock).toHaveBeenCalled()
    expect(res.statusCode).toBe(500)
    expect(res.body).toEqual({})

    jest.resetAllMocks()
  })
})
