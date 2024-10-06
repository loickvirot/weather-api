import { ForecastData } from '../../domain/entity/forecast-data'
import { ForecastDataRepository } from '../../domain/repository/forecast-data-repository'

export const forecastAPIMock: ForecastDataRepository = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getForecastData: (city: string): Promise<ForecastData> =>
    new Promise((resolve) => {
      resolve({
        temperatures: [12, 14, 16, 18, 20, 22, 24],
        pressures: [1003, 1004, 1005, 1006, 1007, 1008, 1009],
        windSpeeds: [12, 12, 12, 12, 12, 12, 12],
      })
    }),
}
