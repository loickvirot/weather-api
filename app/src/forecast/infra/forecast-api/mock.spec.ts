import { describe, expect, test } from '@jest/globals'
import { forecastAPIMock } from './mock'

const expected = {
  temperatures: [12, 14, 16, 18, 20, 22, 24],
  pressures: [1003, 1004, 1005, 1006, 1007, 1008, 1009],
  windSpeeds: [12, 12, 12, 12, 12, 12, 12],
}

describe('Mock repository', () => {
  test('Mock repository should return static values', async () => {
    expect(await forecastAPIMock.getForecastData('toulouse')).toEqual(expected)
  })
})
