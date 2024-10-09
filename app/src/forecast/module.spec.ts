import { describe, expect, test } from '@jest/globals'
import { forecastModule, initialize } from './module'

describe('Forecast module', () => {
  test('initialize function should return ForecastModule object', () => {
    expect(initialize()).toHaveProperty('getForecastForCity')
  })

  test('forecastModule should return ForecastModule object', () => {
    expect(forecastModule).toHaveProperty('getForecastForCity')
  })
})
