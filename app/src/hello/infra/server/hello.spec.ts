import { describe, test, expect } from '@jest/globals'
import createServer from '../../../server/server'
import request from 'supertest'

const server = createServer()

describe('Hello Controller', () => {
  test('Should return "Hello world" without parameters', async () => {
    const res = await request(server).get('/')
    expect(res.body).toEqual({
      status: 200,
      data: {
        text: 'Hello world',
      },
    })
    expect(res.statusCode).toBe(200)
  })

  test('Should return "Hello name" with parameter', async () => {
    const res = await request(server).get('/?name=test')
    expect(res.body).toEqual({
      status: 200,
      data: {
        text: 'Hello test',
      },
    })
    expect(res.statusCode).toBe(200)
  })

  test('Should return 404 with parameter name == "null"', async () => {
    const res = await request(server).get('/?name=null')
    expect(res.body).toEqual({
      status: 404,
      data: {},
    })
    expect(res.statusCode).toBe(404)
  })
})
