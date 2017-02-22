'use strict'

/* global describe, it */
describe('find-test-caller', () => {
  const findTestCaller = require('.')
  it('write this test', () => {
    console.assert(findTestCaller, 'should export something')
  })
})
