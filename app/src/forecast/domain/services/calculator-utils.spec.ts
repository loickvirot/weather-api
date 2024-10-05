import { describe, expect, test } from '@jest/globals'
import { calculateEvolution, leastSquares } from './calculator-utils'
import { EvolutionEnum } from '../entity/forecast'

describe('leastSquares function', () => {
  test('leastSquares function should return slope value', () => {
    expect(leastSquares([10, 10, 10, 10, 10])).toBe(0)
    expect(leastSquares([10, 11, 12, 13, 14])).toBe(1)
    expect(leastSquares([10, 11, 12, 13, 13])).toBe(0.8)
    expect(leastSquares([14, 13, 12, 11, 10])).toBe(-1)
  })
})

describe('calculateEvolution function', () => {
  test('calculateEvolution function should return Increase when slope is greater than 0.2', () => {
    expect(calculateEvolution(1)).toBe(EvolutionEnum.Increase)
    expect(calculateEvolution(0.21)).toBe(EvolutionEnum.Increase)
    expect(calculateEvolution(0.2)).toBe(EvolutionEnum.Stable)
  })

  test('calculateEvolution function should return Decrease when slope is lower than -0.2', () => {
    expect(calculateEvolution(-1)).toBe(EvolutionEnum.Decrease)
    expect(calculateEvolution(-0.21)).toBe(EvolutionEnum.Decrease)
    expect(calculateEvolution(-0.2)).toBe(EvolutionEnum.Stable)
  })

  test('calculateEvolution function should return Stable when slope between -0.2 and 0.2', () => {
    expect(calculateEvolution(0)).toBe(EvolutionEnum.Stable)
    expect(calculateEvolution(0.2)).toBe(EvolutionEnum.Stable)
    expect(calculateEvolution(-0.2)).toBe(EvolutionEnum.Stable)
  })

  test('calculateEvolution function should change tolerance value', () => {
    expect(calculateEvolution(0, 0.3)).toBe(EvolutionEnum.Stable)
    expect(calculateEvolution(0.3, 0.3)).toBe(EvolutionEnum.Stable)
    expect(calculateEvolution(-0.3, 0.3)).toBe(EvolutionEnum.Stable)
    expect(calculateEvolution(0.4, 0.3)).toBe(EvolutionEnum.Increase)
    expect(calculateEvolution(-0.4, 0.3)).toBe(EvolutionEnum.Decrease)
  })
})
