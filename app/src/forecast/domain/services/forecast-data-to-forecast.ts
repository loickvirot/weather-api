import { Forecast } from '../entity/forecast'
import { ForecastData } from '../entity/forecast-data'
import { calculateGeneralEvolution } from './general-evolution-calculator'
import { calculatePressureEvolution } from './pressure-evolution-calculator'
import { calculateTemperatureEvolution } from './temperature-evolution-calculator'
import { calculateWindForce } from './wind-force-calculator'

export const forecastDataToForecast = (
  forecastData: ForecastData,
): Forecast => {
  return {
    evolution: calculateGeneralEvolution(forecastData),
    temperature: calculateTemperatureEvolution(forecastData.temperatures ?? []),
    pressure: calculatePressureEvolution(forecastData.pressures ?? []),
    windForceAverage: calculateWindForce(forecastData.windSpeeds ?? []),
  }
}
