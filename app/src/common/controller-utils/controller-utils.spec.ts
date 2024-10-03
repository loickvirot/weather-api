import { test, expect, describe } from '@jest/globals'
import { createResponse } from 'node-mocks-http'
import { json } from './controller-utils'

describe('Controller Utils', () => {
  test('Should return 200 status code by default', () => {
    const res = createResponse()

    json(res, { test: 'test' })

    expect(res._getJSONData()).toEqual({
      status: 200,
      data: {
        test: 'test',
      },
    })

    expect(res._getStatusCode()).toBe(200)
  })

  test('Should return other status code with parameters', () => {
    const res = createResponse()

    json(res, { test: 'test' }, 400)

    expect(res._getJSONData()).toEqual({
      status: 400,
      data: {
        test: 'test',
      },
    })
    expect(res._getStatusCode()).toBe(400)
  })
})
