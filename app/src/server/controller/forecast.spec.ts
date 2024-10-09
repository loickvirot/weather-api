import { afterEach, describe, expect, jest, test } from '@jest/globals'
import createServer from '../server'
import request from 'supertest'
import { forecast } from '../../modules'

const server = createServer()

describe('Forecast controller', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  test('/weather/forecast?location=toulouse should return Forecast', async () => {
    const res = await request(server).get('/weather/forecast?location=toulouse')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({
      status: 200,
      data: {
        evolution: 'increase',
        pressure: 'increase',
        temperature: 'increase',
        wind_force_average: 3,
      },
    })
  })

  test('/weather/forecast should return 400 when there is no city', async () => {
    const res = await request(server).get('/weather/forecast')
    expect(res.statusCode).toBe(400)
    expect(res.body).toEqual({})
  })

  test('/weather/forecast should return 500 when there is an error thrown in code', async () => {
    const mock = jest
      .spyOn(forecast, 'getForecastForCity')
      .mockImplementation(async () => {
        throw new Error('error')
      })

    const res = await request(server).get('/weather/forecast?location=toulouse')
    expect(mock).toHaveBeenCalled()
    expect(res.statusCode).toBe(500)
    expect(res.body).toEqual({})

    jest.resetAllMocks()
  })
})
