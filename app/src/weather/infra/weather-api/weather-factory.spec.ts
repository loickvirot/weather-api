import { describe, expect, test } from '@jest/globals'
import { WeatherAPIResponse } from './weather-api-response'
import { mockedApiResponse } from './mock'
import { Weather } from '../../domain/entity/weather'
import { weatherAPIResponseToWeather } from './weather-factory'

describe('Weather factory', () => {
  test('weatherAPIResponseToWeather function should transform WeatherAPIResponse to Weather', () => {
    const weatherApiResponse: WeatherAPIResponse = mockedApiResponse
    const expected: Weather = {
      description: 'Broken clouds',
      temperature: 13.85,
      humidity: 75,
      windSpeed: 5.85,
    }
    expect(weatherAPIResponseToWeather(weatherApiResponse.data[0])).toEqual(
      expected,
    )
  })

  test('weatherAPIResponseToWeather function should transform empty data to Weather with undefined values', () => {
    const weatherApiResponse: WeatherAPIResponse = {
      data: [
        {
          weather: undefined,
          temp: undefined,
          rh: undefined,
          wind_spd: undefined,
        },
      ],
    } as WeatherAPIResponse
    const expected: Weather = {
      description: undefined,
      temperature: undefined,
      humidity: undefined,
      windSpeed: undefined,
    }
    expect(weatherAPIResponseToWeather(weatherApiResponse.data[0])).toEqual(
      expected,
    )
  })
})
