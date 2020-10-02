import { module, test } from 'qunit'
import { stringify } from 'dummy/tests/test-utils'
import * as Fixtures from 'dummy/tests/fixtures/components/input-fixtures'

import * as Subject from '@hashicorp/pds-ember/components/pds/input/utils'

module('Unit | Component | Input | utils', function() {
  module('TYPES', function() {
    test('should exist', function(assert) {
      assert.ok(Subject.TYPES, 'TYPES exists')
    })
  })

  Fixtures.VALID.forEach(ilk => {
    module(`type: "${ilk}"`, function() {
      test('should be a known TYPE', function(assert) {
        assert.ok(Subject.TYPES[ilk], 'is known TYPE')
      })

      test('isValidType() should be true', function(assert) {
        assert.true(Subject.isValidType(ilk), `"${ilk}" is a valid type`)
      })

      test(`getValidType() should return "${ilk}"`, function(assert) {
        assert.equal(Subject.getValidType(ilk), ilk, 'returns expected type')
      })
    })
  })

  Fixtures.VALID_TEXT_LIKE.forEach(ilk => {
    module(`type: "${ilk}"`, function() {
      test('isTextLike() should be true', function(assert) {
        assert.true(Subject.isTextLike(ilk), 'is text-like')
      })
    })
  })

  Fixtures.VALID_BUTTON_LIKE.forEach(ilk => {
    module(`type: "${ilk}"`, function() {
      test('isTextLike() should be false', function(assert) {
        assert.false(Subject.isTextLike(ilk), 'is not text-like')
      })
    })
  })

  Fixtures.VALID_OTHER.forEach(ilk => {
    module(`type: "${ilk}"`, function() {
      test('isTextLike() should be false', function(assert) {
        assert.false(Subject.isTextLike(ilk), 'is not text-like')
      })
    })
  })

  Fixtures.INVALID.forEach(ilk => {
    let desc = stringify(ilk)

    module(`type: ${desc}`, function() {
      test('should not be a known TYPE', function(assert) {
        assert.notOk(Subject.TYPES[ilk], 'is not a known TYPE')
      })

      test('isValidType() should be false', function(assert) {
        assert.false(Subject.isValidType(ilk), `${desc} is not a valid type`)
      })

      test(`getValidType() should return "text"`, function(assert) {
        assert.equal(Subject.getValidType(ilk), 'text', 'returns "text"')
      })

      test('isTextLike() should be false', function(assert) {
        assert.false(Subject.isTextLike(ilk), 'is not text-like')
      })

      test('cssClassForType() should be ""', function(assert) {
        assert.equal(Subject.cssClassForType(ilk), '', 'returns expected CSS class name')
      })
    })
  })

  for (const [ilk, expected] of Object.entries(Fixtures.TYPE_CLASSES)) {
    test(`cssClassForType("${ilk}") should be "${expected}"`, function(assert) {
      let actual = Subject.cssClassForType(ilk)
      assert.equal(actual, expected, 'is expected')
    })
  }
})
