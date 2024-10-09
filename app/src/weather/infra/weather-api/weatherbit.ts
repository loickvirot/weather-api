import config from '../../../config'
import { Weather } from '../../domain/entity/weather'
import { WeatherRepository } from '../../domain/repository/weather-repository'
import { WeatherAPIResponse } from './weather-api-response'
import { weatherAPIResponseToWeather } from './weather-factory'

export const weatherbit: WeatherRepository = {
  getCurrentWeather: async (city: string): Promise<Weather> => {
    const url = `${config.weatherbit.baseUrl}/current?city=${city}&key=${config.weatherbit.apiKey}`
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Cannot retrieve current weather. Status: ${res.status}`)
    }

    const json: WeatherAPIResponse = await res.json()

    if (json.data.length == 0) {
      throw new Error(`No data returned from API`)
    }

    return weatherAPIResponseToWeather(json.data[0])
  },
}
