'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('find-test-caller', () => {
  const findTestCaller = require('.')
  it('is a function', () => {
    la(is.fn(findTestCaller))
  })
})
