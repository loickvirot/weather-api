import { describe, expect, test } from '@jest/globals'
import { calculateWindForce } from './wind-force-calculator'

describe('windForceCalculator', () => {
  ;[
    { data: [0, 0, 0], expected: 0, title: '< 1km/h' },
    { data: [0.9, 0.9, 0.9], expected: 0, title: '< 1' },
    { data: [1, 1, 1], expected: 1, title: 'between 1km/h and 5km/h' },
    { data: [5.9, 5.9, 5.9], expected: 1, title: 'between 1km/h and 5km/h' },
    { data: [6, 6, 6], expected: 2, title: 'between 6km/h and 11km/h' },
    {
      data: [11.9, 11.9, 11.9],
      expected: 2,
      title: 'between 6km/h and 11km/h',
    },
    { data: [12, 12, 12], expected: 3, title: 'between 12km/h and 19km/h' },
    {
      data: [19.9, 19.9, 19.9],
      expected: 3,
      title: 'between 12km/h and 19km/h',
    },
    { data: [20, 20, 20], expected: 4, title: 'between 20km/h and 28km/h' },
    {
      data: [28.9, 28.9, 28.9],
      expected: 4,
      title: 'between 20km/h and 28km/h',
    },
    {
      data: [29, 29, 29],
      expected: 5,
      title: 'between 29km/h and 38km/h',
    },
    {
      data: [38.9, 38.9, 38.9],
      expected: 5,
      title: 'between 29km/h and 38km/h',
    },
    {
      data: [39, 39, 39],
      expected: 6,
      title: 'between 39km/h and 49km/h',
    },
    {
      data: [49.9, 49.9, 49.9],
      expected: 6,
      title: 'between 39km/h and 49km/h',
    },
    {
      data: [50, 50, 50],
      expected: 7,
      title: 'between 50km/h and 61km/h',
    },
    {
      data: [61.9, 61.9, 61.9],
      expected: 7,
      title: 'between 50km/h and 61km/h',
    },
    {
      data: [62, 62, 62],
      expected: 8,
      title: 'between 62km/h and 74km/h',
    },
    {
      data: [74.9, 74.9, 74.9],
      expected: 8,
      title: 'between 62km/h and 74km/h',
    },
    {
      data: [75, 75, 75],
      expected: 9,
      title: 'between 75km/h and 88km/h',
    },
    {
      data: [88.9, 88.9, 88.9],
      expected: 9,
      title: 'between 75km/h and 88km/h',
    },
    {
      data: [89, 89, 89],
      expected: 10,
      title: 'between 89km/h and 102km/h',
    },
    {
      data: [102.9, 102.9, 102.9],
      expected: 10,
      title: 'between 89km/h and 102km/h',
    },
    {
      data: [103, 103, 103],
      expected: 11,
      title: 'between 103km/h and 117km/h',
    },
    {
      data: [117.9, 117.9, 117.9],
      expected: 11,
      title: 'between 103km/h and 117km/h',
    },
    {
      data: [118, 118, 118],
      expected: 12,
      title: '>= 118km/h',
    },
  ].forEach(({ data, expected, title }) => {
    test(`windForceCalculator should return ${expected} when average wind speeds average is ${title}`, () => {
      expect(calculateWindForce(data)).toBe(expected)
    })
  })

  test(`windForceCalculator should return 0 when average wind speeds array is empty`, () => {
    expect(calculateWindForce([])).toBe(0)
  })
})
