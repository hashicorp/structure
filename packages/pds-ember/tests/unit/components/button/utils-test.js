import { module, test } from 'qunit';
import * as Fixtures from 'dummy/tests/fixtures/components/button-fixtures';
import * as Subject from '@hashicorp/pds-ember/components/pds/button/utils';

module('Unit | Components.Button.utils', function () {
  test('DEFAULT_VARIANT should exist', function (assert) {
    assert.ok(Subject.DEFAULT_VARIANT, 'DEFAULT_VARIANT exists');
  });

  test('VARIANT_CLASSES should exist', function (assert) {
    assert.ok(Subject.VARIANT_CLASSES, 'VARIANT_CLASSES exists');
  });

  test('VARIANT_CLASSES should have default variant property', function (assert) {
    let { VARIANT_CLASSES, DEFAULT_VARIANT } = Subject;
    let result = VARIANT_CLASSES.hasOwnProperty(DEFAULT_VARIANT);
    assert.true(result, 'DEFAULT_VARIANT is valid variant');
  });

  for (let [variant, expected] of Object.entries(Fixtures.VARIANT_CLASSES)) {
    test(`getVariantClass("${variant}") should be "${expected}"`, function (assert) {
      let actual = Subject.getVariantClass(variant);
      assert.equal(actual, expected, 'is expected');
    });
  }
});
