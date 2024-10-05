export interface Forecast {
  evolution: EvolutionEnum
  temperature: EvolutionEnum
  pressure: EvolutionEnum | ExtendedEvolutionEnum
  windForceAverage: 3
}

export enum EvolutionEnum {
  Increase = 'increase',
  Decrease = 'decrease',
  Stable = 'stable',
}

export enum ExtendedEvolutionEnum {
  HighIncrease = 'high_increase',
  HighDecrease = 'high_decrease',
}
