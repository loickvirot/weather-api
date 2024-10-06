import { getForecast } from './app/get-forecast'
import { Forecast } from './domain/entity/forecast'
import { forecastAPIMock } from './infra/forecast-api/mock'
import { weatherbit } from './infra/forecast-api/weatherbit'

export const getForecastForCity = (city: string): Promise<Forecast> => {
  const repository =
    process.env.APP_ENV === 'production' ? weatherbit : forecastAPIMock
  return getForecast(repository, city)
}
