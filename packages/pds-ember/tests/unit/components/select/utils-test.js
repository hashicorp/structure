import { isArray } from '@ember/array'
import { module, test } from 'qunit'
import { stringify } from 'dummy/tests/test-utils'

import * as Fixtures from 'dummy/tests/fixtures/components/select-fixtures'
import * as Subject from '@hashicorp/pds-ember/components/pds/select/utils'

module('Unit | Components.Select.utils', function() {
  Fixtures.INVALID_ARGS.forEach(args => {
    test(`normalizOptions(${args}) should return empty array`, function(assert) {
      let actual = Subject.normalizeOptions(args)
      let expected = []
      assert.deepEqual(actual, expected, 'returns empty array')
    })
  })

  Fixtures.INVALID_OPTIONS_ARGS.forEach(val => {
    let args = { options: val }
    test(`normalizOptions(${args}) should return empty array`, function(assert) {
      let actual = Subject.normalizeOptions(args)
      let expected = []
      assert.deepEqual(actual, expected, 'returns empty array')
    })
  })

  Fixtures.INVALID_OPTIONS_VALUES.forEach(val => {
    let args = { options: [ val ] }
    test(`normalizeOptions(${args}) should return empty array`, function(assert) {
      let actual = Subject.normalizeOptions(args)
      let expected = []
      assert.deepEqual(actual, expected, 'returns empty array')
    })
  })

  Fixtures.VALID_ARGS_OPTIONS.forEach(([ args, expected ]) => {
    let argsString = stringify(args)
    test(`normalizeOptions(${argsString}) should return expected results`, function(assert) {
      let actual = Subject.normalizeOptions(args)
      assert.true(isArray(actual), 'result is an array')
      assert.deepEqual(actual, expected, 'got expected results')
    })
  })

  Fixtures.INVALID_OPTIONS_VALUES.forEach(option => {
    let optionString = stringify(option)
    test(`isValidOption(${optionString}) should return false`, function(assert) {
      let actual = Subject.isValidOption(option)
      let expected = false
      assert.equal(actual, expected, 'returns false')
    })
  })

  Fixtures.VALID_OPTIONS_VALUES.forEach(option => {
    let optionString = stringify(option)
    test(`isValidOption(${optionString}) should return true`, function(assert) {
      let actual = Subject.isValidOption(option)
      let expected = true
      assert.equal(actual, expected, 'returns true')
    })
  })
})
