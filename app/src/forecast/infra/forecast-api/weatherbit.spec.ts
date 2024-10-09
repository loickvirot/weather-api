import {
  afterEach,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from '@jest/globals'
import { fetchForecastData, getUrl, weatherbit } from './weatherbit'
import { ForecastData } from '../../domain/entity/forecast-data'
import { mockedJson } from './mock'

describe('Weatherbit repository with mock OK', () => {
  let fetchMock: unknown

  const mockedData: ForecastData = {
    temperatures: [12, 14, 16, 18, 20, 22, 24],
    pressures: [1003, 1004, 1005, 1006, 1007, 1008, 1009],
    windSpeeds: [12, 12, 12, 12, 12, 12, 12],
  }

  const mockedResponse: Response = {
    ok: true,
    json: async () => mockedJson,
  } as Response

  beforeEach(() => {
    fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(async () => mockedResponse)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('fetchForecastData calls fetch and returns Response', async () => {
    expect(await fetchForecastData('toulouse')).toEqual(mockedResponse)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  const cities = ['toulouse', 'paris']
  cities.forEach((city: string) => {
    test(`getUrl should return url with location: ${city}`, () => {
      expect(getUrl(city)).toBe(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=7&key=${process.env.WEATHERBIT_APIKEY}`,
      )
    })
  })

  test('getForecastData should return response data', async () => {
    expect(await weatherbit.getForecastData('toulouse')).toEqual(mockedData)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
})

describe('Weatherbit repository with mock NOK', () => {
  let fetchMock: unknown

  const mockedResponse: Response = {
    ok: false,
    status: 400,
    json: async () => ({}),
  } as Response

  beforeEach(() => {
    fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(async () => mockedResponse)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('getForecastData should throw error if fetch is not OK', async () => {
    expect(weatherbit.getForecastData('toulouse')).rejects.toThrow(
      `Cannot retrieve forecast. Status: 400`,
    )
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
})
