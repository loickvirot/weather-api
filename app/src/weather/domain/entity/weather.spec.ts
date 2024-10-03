import { describe, expect, test } from '@jest/globals'
import { Weather } from './weather'

describe('Weather Entity', () => {
  test('Weather entity interface contains parameters', () => {
    const weather: Weather = {
      description: 'test',
      temperature: 10,
      humidity: 0.1,
      windSpeed: 20,
    }
    expect(weather.description).toEqual('test')
    expect(weather.temperature).toEqual(10)
    expect(weather.humidity).toEqual(0.1)
    expect(weather.windSpeed).toEqual(20)
  })
})
