import { describe, expect, jest, test } from '@jest/globals'
import { ForecastDataRepository } from '../domain/repository/forecast-data-repository'
import { ForecastData } from '../domain/entity/forecast-data'
import { getForecastData } from './get-forecast-data'

describe('getForecastData function', () => {
  test('getForecastData should call repository and return ForecastData', async () => {
    const expected: ForecastData = {
      temperatures: [10, 12, 12, 13, 15],
      pressures: [1003, 1003, 1004, 1005],
      windSpeeds: [12, 15, 32, 32, 44],
    }

    const repository: ForecastDataRepository = {
      getForecastData: jest.fn(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (city: string): Promise<ForecastData> =>
          new Promise((resolve) => {
            resolve(expected)
          }),
      ),
    }

    const data = await getForecastData(repository, 'toulouse')
    expect(data).toBe(expected)
    expect(repository.getForecastData).toHaveBeenCalledTimes(1)
  })
})
