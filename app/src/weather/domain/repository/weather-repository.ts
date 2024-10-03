import { Weather } from '../entity/weather'

export interface WeatherRepository {
  getCurrentWeather: (city: string) => Promise<Weather>
}
