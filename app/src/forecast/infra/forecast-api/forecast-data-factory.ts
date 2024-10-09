import { ForecastAPIResponse } from './forecast-api-response'
import { ForecastData } from '../../domain/entity/forecast-data'

export const forecastAPIResponseToForecastData = (
  data: ForecastAPIResponse,
): ForecastData => ({
  temperatures: data.data.map((v) => v.temp as number),
  pressures: data.data.map((v) => v.pres as number),
  windSpeeds: data.data.map((v) => v.wind_spd as number),
})
