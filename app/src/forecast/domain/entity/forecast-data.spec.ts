import { describe, expect, test } from '@jest/globals'
import { ForecastData } from './forecast-data'

describe('ForecastData entity', () => {
  test('ForecastData should have properties', () => {
    const forecastData: ForecastData = {
      temperatures: [10, 10, 12, 13, 9, 10],
      pressures: [1003.5, 1003.3, 1003.1, 1002, 1001.4, 1002.7],
      windSpeeds: [12, 16, 22, 13, 44],
    }
    expect(forecastData).toHaveProperty('temperatures')
    expect(forecastData).toHaveProperty('pressures')
    expect(forecastData).toHaveProperty('windSpeeds')
  })
})
