import { describe, expect, test } from '@jest/globals'
import { EvolutionEnum } from '../entity/forecast'
import { calculateTemperatureEvolution } from './temperature-evolution-calculator'

describe('calculateTemperatureEvolution', () => {
  ;[
    { data: [10, 10, 10, 10, 10], expected: EvolutionEnum.Stable },
    { data: [10, 11, 12, 13, 14], expected: EvolutionEnum.Increase },
    { data: [10, 9, 8, 7, 6], expected: EvolutionEnum.Decrease },
    { data: [10, 11, 12, 14, 10], expected: EvolutionEnum.Increase },
    { data: [10, 11, 12, 14, 5], expected: EvolutionEnum.Decrease },
  ].forEach(({ data, expected }) =>
    test(`calculateTemperatureEvolution should return ${expected}`, () => {
      expect(calculateTemperatureEvolution(data)).toBe(expected)
    }),
  )

  test(`calculateTemperatureEvolution should return stable when array is empty`, () => {
    expect(calculateTemperatureEvolution([])).toBe(EvolutionEnum.Stable)
  })
})
