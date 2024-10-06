import { ForecastData } from '../../domain/entity/forecast-data'
import { ForecastDataRepository } from '../../domain/repository/forecast-data-repository'
import { ForecastAPIResponse } from './forecast-api-response'

export const weatherbit: ForecastDataRepository = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getForecastData: async (city: string): Promise<ForecastData> => {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=7&key=${process.env.WEATHERBIT_APIKEY}`
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Cannot retrieve forecast. Status: ${res.status}`)
    }
    const json: ForecastAPIResponse = await res.json()

    return {
      temperatures: json.data.map((v) => v.temp as number),
      pressures: json.data.map((v) => v.pres as number),
      windSpeeds: json.data.map((v) => v.wind_spd as number),
    }
  },
}
