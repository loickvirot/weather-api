export interface AppConfig {
  mockData: boolean
}

export default {
  mockData: process.env.APP_ENV !== 'production',
} as AppConfig
