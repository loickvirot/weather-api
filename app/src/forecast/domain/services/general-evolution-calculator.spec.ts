import { describe, expect, test } from '@jest/globals'
import { EvolutionEnum } from '../entity/forecast'
import { ForecastData } from '../entity/forecast-data'
import { calculateGeneralEvolution } from './general-evolution-calculator'

describe('GeneralEvolutionCalculator service', () => {
  ;[
    { temperatures: [10, 10, 10, 10, 10], expected: EvolutionEnum.Stable },
    { temperatures: [10, 11, 12, 13, 14], expected: EvolutionEnum.Increase },
    { temperatures: [15, 14, 13, 12, 11], expected: EvolutionEnum.Decrease },
    { temperatures: [10, 11, 12, 14, 10], expected: EvolutionEnum.Increase },
    { temperatures: [10, 11, 12, 14, 5], expected: EvolutionEnum.Decrease },
    { temperatures: [10, 11, 12, 14, 8], expected: EvolutionEnum.Stable },
  ].forEach((testData) => {
    test(`calculateGeneralEvolution should return ${testData.expected} with only temperature`, () => {
      const data: ForecastData = {
        temperatures: testData.temperatures,
        pressures: undefined,
        windSpeeds: undefined,
      }

      expect(calculateGeneralEvolution(data)).toBe(testData.expected)
    })
  })
  ;[
    {
      temperatures: [10, 10, 10, 10, 10],
      pressure: [1000, 1000, 1000, 1000, 1000],
      expected: EvolutionEnum.Stable,
    },
    {
      temperatures: [10, 9, 8, 7, 6],
      pressure: [1000, 1000, 1000, 1000, 1000],
      expected: EvolutionEnum.Decrease,
    },
    {
      temperatures: [10, 10, 10, 10, 10],
      pressure: [1005, 1004, 1003, 1002, 1001],
      expected: EvolutionEnum.Decrease,
    },
    {
      temperatures: [10, 9, 8, 7, 6],
      pressure: [1005, 1004, 1003, 1002, 1001],
      expected: EvolutionEnum.Decrease,
    },
    {
      temperatures: [10, 11, 12, 13, 14],
      pressure: [1000, 1000, 1000, 1000, 1000],
      expected: EvolutionEnum.Increase,
    },
    {
      temperatures: [10, 10, 10, 10, 10],
      pressure: [1000, 1001, 1002, 1003, 1004],
      expected: EvolutionEnum.Increase,
    },
    {
      temperatures: [10, 11, 12, 13, 14],
      pressure: [1000, 1001, 1002, 1003, 1004],
      expected: EvolutionEnum.Increase,
    },
    {
      temperatures: [10, 11, 12, 13, 14],
      pressure: [1004, 1003, 1002, 1001, 1000],
      expected: EvolutionEnum.Stable,
    },
  ].forEach((testData) => {
    test(`calculateGeneralEvolution should return ${testData.expected} with temperature and pressure`, () => {
      const data: ForecastData = {
        temperatures: testData.temperatures,
        pressures: testData.pressure,
        windSpeeds: undefined,
      }

      expect(calculateGeneralEvolution(data)).toBe(testData.expected)
    })
  })
})
