import { Weather } from '../../domain/entity/weather'
import { WeatherRepository } from '../../domain/repository/weather-repository'

export const getWeather = (
  city: string,
  repository: WeatherRepository,
): Promise<Weather> => {
  return repository.getCurrentWeather(city)
}
