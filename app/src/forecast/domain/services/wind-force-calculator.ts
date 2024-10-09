export const calculateWindForce = (data: number[]): number => {
  if (data.length === 0) {
    return 0
  }

  const average =
    data.reduce((previous, current) => previous + current, 0) / data.length

  switch (true) {
    case average < 1:
      return 0
    case average < 6:
      return 1
    case average < 12:
      return 2
    case average < 20:
      return 3
    case average < 29:
      return 4
    case average < 39:
      return 5
    case average < 50:
      return 6
    case average < 62:
      return 7
    case average < 75:
      return 8
    case average < 89:
      return 9
    case average < 103:
      return 10
    case average < 118:
      return 11
    default:
      return 12
  }
}
