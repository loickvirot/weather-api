import { describe, expect, test } from '@jest/globals'
import { ForecastData } from '../entity/forecast-data'
import {
  EvolutionEnum,
  ExtendedEvolutionEnum,
  Forecast,
} from '../entity/forecast'
import { forecastDataToForecast } from './forecast-data-to-forecast'

describe('forecastDataToForecast function', () => {
  test('forecastDataToForecast should transform forecastData to Forecast with stable values', () => {
    const forecastData: ForecastData = {
      temperatures: [15, 15, 15, 15, 15, 15, 15],
      pressures: [1003, 1003, 1003, 1003, 1003, 1003, 1003],
      windSpeeds: [12, 12, 12, 12, 12, 12, 12],
    }
    const expected: Forecast = {
      evolution: EvolutionEnum.Stable,
      pressure: EvolutionEnum.Stable,
      temperature: EvolutionEnum.Stable,
      windForceAverage: 3,
    }

    expect(forecastDataToForecast(forecastData)).toEqual(expected)
  })

  test('forecastDataToForecast should transform forecastData to Forecast with increasing values', () => {
    const forecastData: ForecastData = {
      temperatures: [15, 16, 17, 18, 19, 20, 21],
      pressures: [1000, 1004, 1008, 1012, 1016, 1020, 1024],
      windSpeeds: [100, 100, 100, 100, 100, 100, 100],
    }
    const expected: Forecast = {
      evolution: EvolutionEnum.Increase,
      pressure: ExtendedEvolutionEnum.HighIncrease,
      temperature: EvolutionEnum.Increase,
      windForceAverage: 10,
    }

    expect(forecastDataToForecast(forecastData)).toEqual(expected)
  })

  test('forecastDataToForecast should transform forecastData to Forecast with decreasing values', () => {
    const forecastData: ForecastData = {
      temperatures: [15, 16, 17, 18, 19, 20, 21].reverse(),
      pressures: [1000, 1004, 1008, 1012, 1016, 1020, 1024].reverse(),
      windSpeeds: [0, 0, 0, 0, 0, 0, 0],
    }
    const expected: Forecast = {
      evolution: EvolutionEnum.Decrease,
      pressure: ExtendedEvolutionEnum.HighDecrease,
      temperature: EvolutionEnum.Decrease,
      windForceAverage: 0,
    }

    expect(forecastDataToForecast(forecastData)).toEqual(expected)
  })

  test('forecastDataToForecast should transform forecastData to Forecast with null values', () => {
    const forecastData: ForecastData = {
      temperatures: undefined,
      pressures: undefined,
      windSpeeds: undefined,
    }
    const expected: Forecast = {
      evolution: EvolutionEnum.Stable,
      pressure: EvolutionEnum.Stable,
      temperature: EvolutionEnum.Stable,
      windForceAverage: 0,
    }

    expect(forecastDataToForecast(forecastData)).toEqual(expected)
  })
})
