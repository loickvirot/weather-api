import { ForecastData } from '../entity/forecast-data'

export interface ForecastDataRepository {
  getForecastData: (city: string) => Promise<ForecastData>
}
