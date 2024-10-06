import { describe, expect, jest, test } from '@jest/globals'
import { ForecastData } from '../entity/forecast-data'
import { ForecastDataRepository } from './forecast-data-repository'

describe('ForecastDataRepository', () => {
  test('ForecastDataRepository should contains functions', () => {
    const repo: ForecastDataRepository = {
      getForecastData: jest.fn(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (city: string): Promise<ForecastData> =>
          new Promise((resolve) => {
            resolve({
              temperatures: [10, 12, 12, 13, 15],
              pressures: [1003, 1003, 1004, 1005],
              windSpeeds: [12, 15, 32, 32, 44],
            })
          }),
      ),
    }

    expect(repo).toHaveProperty('getForecastData')
  })
})
