import appConfig from './app.config'
import { forecastModule } from './forecast/module'
import { weatherModule } from './weather/module'

export const weather = weatherModule({
  mockData: appConfig.mockData,
})

export const forecast = forecastModule({
  mockData: appConfig.mockData,
})
