export interface AppConfig {
  mockData: boolean
  weatherbit: {
    baseUrl: string
    apiKey: string
  }
}

export default {
  mockData: process.env.APP_ENV !== 'production',
  weatherbit: {
    baseUrl: 'https://api.weatherbit.io/v2.0',
    apiKey: process.env.WEATHERBIT_APIKEY ?? '',
  },
} as AppConfig
