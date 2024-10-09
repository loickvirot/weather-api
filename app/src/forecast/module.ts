import { getForecast } from './app/get-forecast'
import { Forecast } from './domain/entity/forecast'
import { forecastAPIMock } from './infra/forecast-api/mock'
import { weatherbit } from './infra/forecast-api/weatherbit'

export interface ForecastModule {
  getForecastForCity: (city: string) => Promise<Forecast>
}

export const initialize = (): ForecastModule => {
  const repository =
    process.env.APP_ENV === 'production' ? weatherbit : forecastAPIMock

  return {
    getForecastForCity: (city: string) => getForecast(repository, city),
  }
}

export const forecastModule = initialize()
