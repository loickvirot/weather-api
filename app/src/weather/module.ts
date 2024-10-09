import { getWeather } from './app/query/get-weather'
import { Weather } from './domain/entity/weather'
import { mockWeatherRepository } from './infra/weather-api/mock'
import { weatherbit } from './infra/weather-api/weatherbit'

export interface WeatherModule {
  getCurrentWeather: (city: string) => Promise<Weather>
}

export interface WeatherModuleOptions {
  mockData: boolean
}

export const weatherModule = (options: WeatherModuleOptions) => {
  const repository = options.mockData ? mockWeatherRepository : weatherbit

  return {
    getCurrentWeather: (city: string): Promise<Weather> =>
      getWeather(city, repository),
  }
}
