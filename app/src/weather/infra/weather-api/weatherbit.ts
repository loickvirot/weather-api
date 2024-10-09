import { Weather } from '../../domain/entity/weather'
import { WeatherRepository } from '../../domain/repository/weather-repository'
import { WeatherAPIResponse } from './weather-api-response'
import { weatherAPIResponseToWeather } from './weather-factory'

export const weatherbit: WeatherRepository = {
  getCurrentWeather: async (city: string): Promise<Weather> => {
    const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.WEATHERBIT_APIKEY}`
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
