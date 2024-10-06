import { ForecastData } from '../domain/entity/forecast-data'
import { ForecastDataRepository } from '../domain/repository/forecast-data-repository'

export const getForecastData = (
  repository: ForecastDataRepository,
  city: string,
): Promise<ForecastData> => {
  return repository.getForecastData(city)
}
