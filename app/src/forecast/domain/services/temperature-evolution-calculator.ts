import { EvolutionEnum } from '../entity/forecast'
import { calculateEvolution, leastSquares } from './calculator-utils'

export const calculateTemperatureEvolution = (
  data: number[],
): EvolutionEnum => {
  return calculateEvolution(leastSquares(data))
}
