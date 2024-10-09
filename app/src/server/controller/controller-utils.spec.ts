import { test, expect, describe } from '@jest/globals'
import { createJsonResponse } from './controller-utils'

describe('Controller Utils', () => {
  test('createJsonbResponse should return json response with data', () => {
    interface Test {
      test: string
      value: number
    }

    const expectedData = {
      test: 'hello world',
      value: 1,
    }

    const response = createJsonResponse<Test>(expectedData)

    expect(response).toHaveProperty('status')
    expect(response.status).toBe(200)

    expect(response).toHaveProperty('data')
    expect(response.data).toBe(expectedData)
  })
})
