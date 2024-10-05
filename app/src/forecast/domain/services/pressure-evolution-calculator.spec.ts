import { describe, expect, test } from '@jest/globals'
import { EvolutionEnum, ExtendedEvolutionEnum } from '../entity/forecast'
import { calculatePressureEvolution } from './pressure-evolution-calculator'

describe('calculatePressureEvolution', () => {
  ;[
    { data: [1000, 1000, 1000, 1000, 1000], expected: EvolutionEnum.Stable },
    { data: [1000, 1001, 1002, 1003, 1004], expected: EvolutionEnum.Increase },
    { data: [1004, 1003, 1002, 1001, 1000], expected: EvolutionEnum.Decrease },
    {
      data: [1000, 1004, 1008, 1012, 1016],
      expected: ExtendedEvolutionEnum.HighIncrease,
    },
    {
      data: [1016, 1012, 1008, 1004, 1000],
      expected: ExtendedEvolutionEnum.HighDecrease,
    },
  ].forEach(({ data, expected }) =>
    test(`calculatePressureEvolution should return ${expected}`, () => {
      const res = calculatePressureEvolution(data)
      expect(res).toBe(expected)
    }),
  )
})
