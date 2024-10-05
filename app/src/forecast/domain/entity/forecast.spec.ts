import { describe, expect, test } from '@jest/globals'
import { EvolutionEnum, Forecast, PressureEnum } from './forecast'

describe('Forecast entity', () => {
  test('Entity should have properties', () => {
    const forecast: Forecast = {
      evolution: EvolutionEnum.Increase,
      temperature: EvolutionEnum.Decrease,
      pressure: PressureEnum.HighDecrease,
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

  test('PressureEnum should have values', () => {
    expect(PressureEnum.HighIncrease).toEqual('high_increase')
    expect(PressureEnum.Increase).toEqual('increase')
    expect(PressureEnum.HighDecrease).toEqual('high_decrease')
    expect(PressureEnum.Decrease).toEqual('decrease')
    expect(PressureEnum.Stable).toEqual('stable')
  })
})
