// index.test.js
import { strict as assert } from 'node:assert'
import { sum } from './index.js'

describe('sum', () => {
  it('should add 1 + 2 to equal 3', () => {
    assert.equal(sum(1, 2), 3)
  })

  it('should add two decimals', () => {
    assert.equal(sum(0.5, 0.25), 0.75)
  })
})