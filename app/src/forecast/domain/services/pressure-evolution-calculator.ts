import { EvolutionEnum, ExtendedEvolutionEnum } from '../entity/forecast'
import { calculateEvolutionExtended, leastSquares } from './calculator-utils'

export const calculatePressureEvolution = (
  data: number[],
): EvolutionEnum | ExtendedEvolutionEnum => {
  return calculateEvolutionExtended(leastSquares(data))
}
