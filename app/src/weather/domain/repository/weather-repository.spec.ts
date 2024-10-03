import { describe, expect, test } from '@jest/globals'
import { Weather } from '../entity/weather'
import { type WeatherRepository } from './weather-repository'

describe('Weather Repository', () => {
  test('Weathe repository interface contains functions', () => {
    const weatherRepository: WeatherRepository = {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getCurrentWeather: async (city: string): Promise<Weather> => ({
        description: 'test',
        temperature: 10,
        humidity: 0.1,
        windSpeed: 20,
      }),
    }
    expect(weatherRepository).toHaveProperty('getCurrentWeather')
  })
})
