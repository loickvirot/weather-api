import { describe, test, expect } from '@jest/globals'
import createServer from './server'

describe('server', () => {
  test('Should create app', () => {
    const app = createServer()
    expect(app).not.toBeFalsy()
  })
})
