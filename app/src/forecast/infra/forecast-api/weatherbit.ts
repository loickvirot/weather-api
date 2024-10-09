import { ForecastData } from '../../domain/entity/forecast-data'
import { ForecastDataRepository } from '../../domain/repository/forecast-data-repository'
import { ForecastAPIResponse } from './forecast-api-response'
import { forecastAPIResponseToForecastData } from './forecast-data-factory'

export const weatherbit: ForecastDataRepository = {
  getForecastData: async (city: string): Promise<ForecastData> => {
    const res = await fetchForecastData(city)
    if (!res.ok) {
      throw new Error(`Cannot retrieve forecast. Status: ${res.status}`)
    }
    const json: ForecastAPIResponse = await res.json()

    return forecastAPIResponseToForecastData(json)
  },
}

export const fetchForecastData = (city: string): Promise<Response> =>
  fetch(getUrl(city))

export const getUrl = (city: string): string =>
  `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=7&key=${process.env.WEATHERBIT_APIKEY}`
