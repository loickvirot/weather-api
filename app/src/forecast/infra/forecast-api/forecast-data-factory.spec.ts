import { describe, expect, test } from '@jest/globals'
import { ForecastAPIResponse } from './forecast-api-response'
import { mockedJson } from './mock'
import { forecastAPIResponseToForecastData } from './forecast-data-factory'

describe('ForecastData factory', () => {
  test('forecastAPIResponseToForecastData function should create ForecastData from ForecastAPIResponse', () => {
    const apiData: ForecastAPIResponse = mockedJson
    const expected = {
      temperatures: [12, 14, 16, 18, 20, 22, 24],
      pressures: [1003, 1004, 1005, 1006, 1007, 1008, 1009],
      windSpeeds: [12, 12, 12, 12, 12, 12, 12],
    }
    expect(forecastAPIResponseToForecastData(apiData)).toEqual(expected)
  })
})
