import { getForecast } from './app/get-forecast'
import { Forecast } from './domain/entity/forecast'
import { forecastAPIMock } from './infra/forecast-api/mock'
import { weatherbit } from './infra/forecast-api/weatherbit'

export interface ForecastModule {
  getForecastForCity: (city: string) => Promise<Forecast>
}

export interface ForecastModuleOptions {
  mockData: boolean
}

export const forecastModule = (
  options: ForecastModuleOptions = {
    mockData: process.env.APP_ENV !== 'production',
  },
): ForecastModule => {
  const repository = options.mockData ? forecastAPIMock : weatherbit

  return {
    getForecastForCity: (city: string) => getForecast(repository, city),
  }
}
