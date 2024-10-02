import { test, expect } from '@jest/globals'
import { createResponse } from 'node-mocks-http'
import baseController from './controller-utils'

describe('Hello Controller', () => {
  test('Should return 200 status code by default', () => {
    const res = createResponse()

    baseController.json(res, { test: 'test' })

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

    baseController.json(res, { test: 'test' }, 400)

    expect(res._getJSONData()).toEqual({
      status: 400,
      data: {
        test: 'test',
      },
    })
    expect(res._getStatusCode()).toBe(400)
  })
})
