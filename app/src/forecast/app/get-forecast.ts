import { Forecast } from '../domain/entity/forecast'
import { ForecastDataRepository } from '../domain/repository/forecast-data-repository'
import { forecastDataToForecast } from '../domain/services/forecast-data-to-forecast'

export const getForecast = async (
  repository: ForecastDataRepository,
  city: string,
): Promise<Forecast> => {
  const forecastData = await repository.getForecastData(city)
  return forecastDataToForecast(forecastData)
}
