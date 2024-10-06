import { getForecast } from './app/get-forecast'
import { Forecast } from './domain/entity/forecast'
import { forecastAPIMock } from './infra/forecast-api/mock'

export const getForecastForCity = (city: string): Promise<Forecast> => {
  return getForecast(forecastAPIMock, city)
}
