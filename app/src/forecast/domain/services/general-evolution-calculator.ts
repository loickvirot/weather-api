import { EvolutionEnum } from '../entity/forecast'
import { ForecastData } from '../entity/forecast-data'
import { calculateEvolution, leastSquares } from './calculator-utils'

/*
 * This function calculate the trends of each data values,
 * then calculate average of trends to determine evolution
 * */
export const calculateGeneralEvolution = (
  data: ForecastData,
): EvolutionEnum => {
  const dataToAnalyse: number[][] = [data.temperatures, data.pressures].filter(
    (v): v is number[] => v != undefined && !!v,
  )

  if (dataToAnalyse.length === 0) {
    return EvolutionEnum.Stable
  }

  const slopes = dataToAnalyse.map((v) => leastSquares(v))
  const average =
    slopes.reduce((prev: number, current: number) => prev + current, 0) /
    slopes.length

  return calculateEvolution(average)
}
