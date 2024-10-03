import { Weather } from '../../domain/entity/weather'
import { WeatherRepository } from '../../domain/repository/weather-repository'

export const mockWeatherReposiory: WeatherRepository = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCurrentWeather: (city: string): Promise<Weather> =>
    new Promise((resolve) => {
      resolve({
        description: 'test',
        temperature: 10,
        humidity: 0.1,
        windSpeed: 20,
      })
    }),
}
