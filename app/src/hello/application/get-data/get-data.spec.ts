import { describe, test, expect } from '@jest/globals'
import { getData } from './get-data'

describe('get-data', () => {
  test('getData should return text "hello world"', () => {
    expect(getData()).toEqual({
      text: 'Hello world',
    })
  })

  test('getData should return text "hello name" with parameter', () => {
    expect(getData('name')).toEqual({
      text: 'Hello name',
    })
  })

  test('getData should return nothing if parameter is "null"', () => {
    expect(() => {
      getData('null')
    }).toThrow('name cannot be null')
  })
})
