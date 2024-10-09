import { describe, expect, jest, test } from '@jest/globals'
import { weatherModule } from './module'
import { mockWeatherRepository } from './infra/weather-api/mock'
import { getWeather } from './app/query/get-weather'
import { weatherbit } from './infra/weather-api/weatherbit'

jest.mock('./infra/weather-api/mock')
jest.mock('./infra/weather-api/weatherbit')
jest.mock('./app/query/get-weather')

describe('Forecast module', () => {
  test('initialize function should return ForecastModule object', () => {
    expect(weatherModule({ mockData: true })).toHaveProperty(
      'getCurrentWeather',
    )
  })

  test('getCurrentWeather should use mockWeatherReposiory when options.mockData is true', async () => {
    const module = weatherModule({ mockData: true })
    await module.getCurrentWeather('toulouse')
    expect(getWeather).toHaveBeenCalledWith('toulouse', mockWeatherRepository)
  })

  test('getCurrentWeather should use weatherbit when options.mockData is false', async () => {
    const module = weatherModule({ mockData: false })
    await module.getCurrentWeather('toulouse')
    expect(getWeather).toHaveBeenCalledWith('toulouse', weatherbit)
  })
})
