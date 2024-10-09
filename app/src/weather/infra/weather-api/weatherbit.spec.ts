import {
  afterEach,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from '@jest/globals'
import { mockedApiResponse } from './mock'
import { Weather } from '../../domain/entity/weather'
import { weatherbit } from './weatherbit'

let fetchMock: unknown

describe('Weatherbit API with mock reponse OK', () => {
  const mockedResponse: Response = {
    ok: true,
    json: async () => mockedApiResponse,
  } as Response

  beforeEach(() => {
    fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(async () => mockedResponse)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('getCurrentWeather should return weather data', async () => {
    const expected: Weather = {
      description: 'Broken clouds',
      temperature: 13.85,
      humidity: 75,
      windSpeed: 5.85,
    }
    expect(await weatherbit.getCurrentWeather('toulouse')).toEqual(expected)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
})

describe('Weatherbit API with mock reponse NOK', () => {
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

  test('getCurrentWeather should throw error if API returns ok: false', () => {
    expect(weatherbit.getCurrentWeather('toulouse')).rejects.toThrow(
      'Cannot retrieve current weather. Status: 400',
    )
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
})

describe('Weatherbit API with mock reponse OK but no data', () => {
  const mockedResponse: Response = {
    ok: true,
    json: async () => ({
      count: 1,
      data: [],
    }),
  } as Response

  beforeEach(() => {
    fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(async () => mockedResponse)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('getCurrentWeather should return weather data', () => {
    expect(weatherbit.getCurrentWeather('toulouse')).rejects.toThrow(
      'No data returned from API',
    )
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
})
