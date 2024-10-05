import { EvolutionEnum } from '../entity/forecast'
import { ForecastData } from '../entity/forecast-data'

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

  const slopes = dataToAnalyse.map((v) => leastSquares(v))
  const average =
    slopes.reduce((prev: number, current: number) => prev + current) /
    slopes.length

  return calculateEvolution(average, 0.2)
}

const calculateEvolution = (
  slope: number,
  stableTolerence: number,
): EvolutionEnum => {
  if (slope > stableTolerence) {
    return EvolutionEnum.Increase
  }

  if (slope < stableTolerence * -1) {
    return EvolutionEnum.Decrease
  }
  return EvolutionEnum.Stable
}

const leastSquares = (data: number[]): number => {
  const x = data.map((_, index) => index)

  const averageX = x.reduce((acc, val) => acc + val, 0) / x.length
  const averageY = data.reduce((acc, val) => acc + val, 0) / x.length

  let numerator = 0
  let denominator = 0

  x.forEach((_, index: number) => {
    numerator += (x[index] - averageX) * (data[index] - averageY)
    denominator += (x[index] - averageX) ** 2
  })

  return numerator / denominator
}
