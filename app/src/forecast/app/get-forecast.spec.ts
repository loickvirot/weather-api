import { describe, expect, jest, test } from '@jest/globals'
import { ForecastDataRepository } from '../domain/repository/forecast-data-repository'
import { ForecastData } from '../domain/entity/forecast-data'
import { getForecast } from './get-forecast'
import { EvolutionEnum, Forecast } from '../domain/entity/forecast'

describe('getForecastData function', () => {
  test('getForecastData should call repository and return Forecast', async () => {
    const expected: Forecast = {
      evolution: EvolutionEnum.Increase,
      pressure: EvolutionEnum.Increase,
      temperature: EvolutionEnum.Increase,
      windForceAverage: 4,
    }

    const repository: ForecastDataRepository = {
      getForecastData: jest.fn(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (city: string): Promise<ForecastData> =>
          Promise.resolve({
            temperatures: [10, 12, 12, 13, 15],
            pressures: [1003, 1003, 1004, 1005],
            windSpeeds: [12, 15, 32, 32, 44], // avg: 27
          }),
      ),
    }

    const data = await getForecast(repository, 'toulouse')
    expect(data).toEqual(expected)
    expect(repository.getForecastData).toHaveBeenCalledTimes(1)
  })

  test('getForecastData should call repository and return stable Forecast with empty values', async () => {
    const expected: Forecast = {
      evolution: EvolutionEnum.Stable,
      pressure: EvolutionEnum.Stable,
      temperature: EvolutionEnum.Stable,
      windForceAverage: 0,
    }

    const repository: ForecastDataRepository = {
      getForecastData: jest.fn(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (city: string): Promise<ForecastData> =>
          Promise.resolve({
            temperatures: undefined,
            pressures: undefined,
            windSpeeds: undefined,
          }),
      ),
    }

    const data = await getForecast(repository, 'toulouse')
    expect(data).toEqual(expected)
    expect(repository.getForecastData).toHaveBeenCalledTimes(1)
  })
})
