import { describe, expect, jest, test } from '@jest/globals'
import { WeatherRepository } from '../../domain/repository/weather-repository'
import { Weather } from '../../domain/entity/weather'
import { getWeather } from './get-weather'

describe('getWeather function', () => {
  test('getWeather function should return Weather', async () => {
    const expected: Weather = {
      description: 'test',
      temperature: 10,
      humidity: 0.1,
      windSpeed: 20,
    }

    const weatherRepository: WeatherRepository = {
      getCurrentWeather: jest.fn(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (city: string): Promise<Weather> =>
          new Promise((resolve) => {
            resolve(expected)
          }),
      ),
    }

    const res = await getWeather('toulouse', weatherRepository)
    expect(res).toEqual(expected)
    expect(weatherRepository.getCurrentWeather).toHaveBeenCalledTimes(1)
  })
})
