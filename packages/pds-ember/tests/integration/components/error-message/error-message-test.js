/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | PdsErrorMessage', function (hooks) {
  setupRenderingTest(hooks);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.set('myAction', function(val) { ... });

  test('it renders', async function (assert) {
    await render(hbs`<Pds::ErrorMessage />`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('it renders with content', async function (assert) {
    await render(hbs`
      <Pds::ErrorMessage>
        template block text
      </Pds::ErrorMessage>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it passes through a spec-standard [id] attribute', async function (assert) {
    await render(hbs`
      <Pds::ErrorMessage id="foobar">
        message content
      </Pds::ErrorMessage>
    `);

    assert.dom('[data-test-root]').hasAttribute('id', 'foobar');
  });

  test('it passes through a custom [foo-bar] attribute', async function (assert) {
    await render(hbs`
      <Pds::ErrorMessage foo-bar="wizbang">
        message content
      </Pds::ErrorMessage>
    `);

    assert.dom('[data-test-root]').hasAttribute('foo-bar', 'wizbang');
  });
});
