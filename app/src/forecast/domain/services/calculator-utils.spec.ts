import { describe, expect, test } from '@jest/globals'
import {
  calculateEvolution,
  calculateEvolutionExtended,
  leastSquares,
} from './calculator-utils'
import { EvolutionEnum, ExtendedEvolutionEnum } from '../entity/forecast'

describe('leastSquares function', () => {
  test('leastSquares function should return slope value', () => {
    expect(leastSquares([])).toBe(0)
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

describe('calculateEvolutionExtended function', () => {
  test('calculateEvolutionExtended function should return HighIncrease when slope is greater than 2', () => {
    expect(calculateEvolutionExtended(3)).toBe(
      ExtendedEvolutionEnum.HighIncrease,
    )
    expect(calculateEvolutionExtended(2.1)).toBe(
      ExtendedEvolutionEnum.HighIncrease,
    )
    expect(calculateEvolutionExtended(2)).toBe(EvolutionEnum.Increase)
  })

  test('calculateEvolutionExtended function should return Increase when slope is between 0.2 and 2', () => {
    expect(calculateEvolutionExtended(1)).toBe(EvolutionEnum.Increase)
    expect(calculateEvolutionExtended(0.21)).toBe(EvolutionEnum.Increase)
    expect(calculateEvolutionExtended(0.2)).toBe(EvolutionEnum.Stable)
  })

  test('calculateEvolutionExtended function should return Decrease when slope is between -0.2 and -2', () => {
    expect(calculateEvolutionExtended(-1)).toBe(EvolutionEnum.Decrease)
    expect(calculateEvolutionExtended(-0.21)).toBe(EvolutionEnum.Decrease)
    expect(calculateEvolutionExtended(-0.2)).toBe(EvolutionEnum.Stable)
  })

  test('calculateEvolutionExtended function should return HighDecrease when slope is lower than -2', () => {
    expect(calculateEvolutionExtended(-3)).toBe(
      ExtendedEvolutionEnum.HighDecrease,
    )
    expect(calculateEvolutionExtended(-2.1)).toBe(
      ExtendedEvolutionEnum.HighDecrease,
    )
    expect(calculateEvolutionExtended(-2)).toBe(EvolutionEnum.Decrease)
  })

  test('calculateEvolutionExtended function should return Stable when slope between -0.2 and 0.2', () => {
    expect(calculateEvolutionExtended(0)).toBe(EvolutionEnum.Stable)
    expect(calculateEvolutionExtended(0.2)).toBe(EvolutionEnum.Stable)
    expect(calculateEvolutionExtended(-0.2)).toBe(EvolutionEnum.Stable)
  })

  test('calculateEvolutionExtended function should change tolerance value', () => {
    expect(calculateEvolutionExtended(0.3, 0.3, 3)).toBe(EvolutionEnum.Stable)
    expect(calculateEvolutionExtended(3, 0.3, 3)).toBe(EvolutionEnum.Increase)
    expect(calculateEvolutionExtended(4, 0.3, 3)).toBe(
      ExtendedEvolutionEnum.HighIncrease,
    )
    expect(calculateEvolutionExtended(-0.3, 0.3, 3)).toBe(EvolutionEnum.Stable)
    expect(calculateEvolutionExtended(-3, 0.3, 3)).toBe(EvolutionEnum.Decrease)
    expect(calculateEvolutionExtended(-4, 0.3, 3)).toBe(
      ExtendedEvolutionEnum.HighDecrease,
    )
  })
})
