import config from './config'
import { forecastModule } from './forecast/module'
import { weatherModule } from './weather/module'

export const weather = weatherModule({
  mockData: config.mockData,
})

export const forecast = forecastModule({
  mockData: config.mockData,
})
