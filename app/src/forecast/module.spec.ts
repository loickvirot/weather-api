import { describe, expect, jest, test } from '@jest/globals'
import { forecastModule } from './module'
import { forecastAPIMock } from './infra/forecast-api/mock'
import { weatherbit } from './infra/forecast-api/weatherbit'
import { getForecast } from './app/get-forecast'

jest.mock('./infra/forecast-api/mock')
jest.mock('./infra/forecast-api/weatherbit')
jest.mock('./app/get-forecast')

describe('Forecast module', () => {
  test('initialize function should return ForecastModule object', () => {
    expect(forecastModule()).toHaveProperty('getForecastForCity')
  })

  test('getForecastForCity should use forecastAPIMock repository when options.mockData is true', async () => {
    const module = forecastModule({ mockData: true })
    await module.getForecastForCity('toulouse')
    expect(getForecast).toHaveBeenCalledWith(forecastAPIMock, 'toulouse')
  })

  test('getForecastForCity should use weatherbit repository when options.mockData is true', async () => {
    const module = forecastModule({ mockData: false })
    await module.getForecastForCity('toulouse')
    expect(getForecast).toHaveBeenCalledWith(weatherbit, 'toulouse')
  })
})
