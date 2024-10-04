import { Weather } from '../../domain/entity/weather'
import { WeatherAPIResponseData } from './weather-api-response'

export const weatherAPIResponseToWeather = (
  data: WeatherAPIResponseData,
): Weather => {
  return {
    description: data.weather?.description,
    temperature: data.temp,
    humidity: data.rh,
    windSpeed: data.wind_spd,
  }
}
