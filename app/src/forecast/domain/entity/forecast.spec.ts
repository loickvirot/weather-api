import { describe, expect, test } from '@jest/globals'
import { EvolutionEnum, ExtendedEvolutionEnum, Forecast } from './forecast'

describe('Forecast entity', () => {
  test('Entity should have properties', () => {
    const forecast: Forecast = {
      evolution: EvolutionEnum.Increase,
      temperature: EvolutionEnum.Decrease,
      pressure: ExtendedEvolutionEnum.HighDecrease,
      windForceAverage: 3,
    }
    expect(forecast).toHaveProperty('evolution')
    expect(forecast).toHaveProperty('temperature')
    expect(forecast).toHaveProperty('pressure')
    expect(forecast).toHaveProperty('windForceAverage')
  })

  test('EvolutionEnum should have values', () => {
    expect(EvolutionEnum.Increase).toEqual('increase')
    expect(EvolutionEnum.Decrease).toEqual('decrease')
    expect(EvolutionEnum.Stable).toEqual('stable')
  })

  test('ExtendedEvolutionEnum should have values', () => {
    expect(ExtendedEvolutionEnum.HighIncrease).toEqual('high_increase')
    expect(ExtendedEvolutionEnum.HighDecrease).toEqual('high_decrease')
  })
})
