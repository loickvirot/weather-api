export interface Forecast {
  evolution: EvolutionEnum
  temperature: EvolutionEnum
  pressure: PressureEnum.HighDecrease
  windForceAverage: 3
}

export enum EvolutionEnum {
  Increase = 'increase',
  Decrease = 'decrease',
  Stable = 'stable',
}

export enum PressureEnum {
  HighIncrease = 'high_increase',
  Increase = 'increase',
  HighDecrease = 'high_decrease',
  Decrease = 'decrease',
  Stable = 'stable',
}
