import { getWeather } from './app/query/get-weather'
import { Weather } from './domain/entity/weather'
import { mockWeatherReposiory } from './infra/weather-api/mock'
import { weatherbit } from './infra/weather-api/weatherbit'

export const getCurrentWeather = (city: string): Promise<Weather> => {
  const repository =
    process.env.APP_ENV === 'production' ? weatherbit : mockWeatherReposiory
  return getWeather(city, repository)
}
