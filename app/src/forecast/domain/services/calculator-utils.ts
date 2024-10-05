import { EvolutionEnum } from '../entity/forecast'

export const leastSquares = (data: number[]): number => {
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

export const calculateEvolution = (
  slope: number,
  stableTolerence: number = 0.2,
): EvolutionEnum => {
  if (slope > stableTolerence) {
    return EvolutionEnum.Increase
  }

  if (slope < stableTolerence * -1) {
    return EvolutionEnum.Decrease
  }
  return EvolutionEnum.Stable
}
