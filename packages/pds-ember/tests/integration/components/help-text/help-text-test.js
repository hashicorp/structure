/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-root]';

module('Integration | Components.HelpText', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders without block', async function (assert) {
    await render(hbs`<Pds::HelpText />`);

    assert.equal(this.element.textContent.trim(), '');
    assert.dom(ROOT).hasClass('pds-helpText', 'has CSS class');
  });

  test('it renders with block', async function (assert) {
    await render(hbs`
      <Pds::HelpText>
        template block text
      </Pds::HelpText>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
    assert.dom(ROOT).hasClass('pds-helpText', 'has CSS class');
  });

  test('it renders with attributes', async function (assert) {
    await render(hbs`
      <Pds::HelpText
        aria-hidden
        foo-bar="wizbang"
        id="foobar"
      >
        message content
      </Pds::HelpText>
    `);

    assert
      .dom(ROOT)
      .hasAttribute('aria-hidden', '', 'has [aria-hidden] attr')
      .hasAttribute('foo-bar', 'wizbang', 'has [foo-bar] attr')
      .hasAttribute('id', 'foobar', 'has [id] attr');
  });
});
