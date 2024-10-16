export interface AppConfig {
  baseUrl: string
  mockData: boolean
  weatherbit: {
    baseUrl: string
    apiKey: string
  }
  cors: {
    origin: string
  }
}

export default {
  baseUrl: process.env.BASE_URL,
  mockData: process.env.APP_ENV !== 'production',
  weatherbit: {
    baseUrl: 'https://api.weatherbit.io/v2.0',
    apiKey: process.env.WEATHERBIT_APIKEY ?? '',
  },
  cors: {
    origin: process.env.CORS_ORIGIN ?? '',
  },
} as AppConfig
