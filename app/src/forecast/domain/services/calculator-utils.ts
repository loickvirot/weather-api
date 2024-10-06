import { EvolutionEnum, ExtendedEvolutionEnum } from '../entity/forecast'

export const leastSquares = (data: number[]): number => {
  if (data.length === 0) {
    return 0
  }

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
  switch (true) {
    case slope < stableTolerence * -1:
      return EvolutionEnum.Decrease
    case slope <= stableTolerence:
      return EvolutionEnum.Stable
    default:
      return EvolutionEnum.Increase
  }
}

export const calculateEvolutionExtended = (
  slope: number,
  stableTolerence: number = 0.2,
  normalTolerence: number = 2,
): EvolutionEnum | ExtendedEvolutionEnum => {
  switch (true) {
    case slope < normalTolerence * -1:
      return ExtendedEvolutionEnum.HighDecrease
    case slope > normalTolerence:
      return ExtendedEvolutionEnum.HighIncrease
    default:
      return calculateEvolution(slope, stableTolerence)
  }
}
