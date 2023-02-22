/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, focus } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-root]';

module('Integration | Components.Textarea', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render inline', async function (assert) {
    await render(hbs`
      <Pds::Textarea
        id="foo"
        data-bar="buzz"
      />
    `);
    await isRendered(assert);
    await appliesAttributes(assert);

    assert
      .dom(ROOT)
      .hasAttribute('rows', '4', 'renders with 4 rows')
      .hasNoValue();
  });

  test('it should render block content', async function (assert) {
    await render(hbs`
      <Pds::Textarea
        id="foo"
        data-bar="buzz"
        rows="8"
      >
        template block text
      </Pds::Textarea>
    `);
    await isRendered(assert);
    await appliesAttributes(assert);

    assert.equal(
      this.element.textContent.trim(),
      'template block text',
      'has expected text content'
    );
    assert.dom(ROOT).hasAttribute('rows', '8', 'renders with 8 rows');
  });

  test('it should include whitespace in the <textarea> value', async function (assert) {
    await render(hbs`
      <Pds::Textarea>
        template block text
      </Pds::Textarea>
    `);
    let ctrl = find(ROOT);
    assert.notEqual(ctrl.value, 'template block text', 'value is not trimmed');
    assert.true(/^\s+/.test(ctrl.value), 'value has leading white space');
    assert.true(/\s+$/.test(ctrl.value), 'value has trailing white space');
  });

  test('it should modify attr state on blur', async function (assert) {
    await render(hbs`<Pds::Textarea />`);
    await isRendered(assert);

    await focus(ROOT);
    assert
      .dom(ROOT)
      .doesNotHaveAttribute('pds-dirty', 'is clean')
      .doesNotHaveAttribute('pds-touched', 'is untouched');

    // TODO - Fix this
    // await blur(ROOT);
    // assert
    //   .dom(ROOT)
    //   .hasAttribute('pds-dirty', '', 'is dirty')
    //   .hasAttribute('pds-touched', '', 'is touched');
  });

  test('it should modify visual validity', async function (assert) {
    this.set('invalid', false);
    await render(hbs`<Pds::Textarea @invalid={{this.invalid}} />`);
    assert
      .dom(ROOT)
      .doesNotHaveClass('pds--invalid', 'does not look "invalid"');

    this.set('invalid', true);
    assert.dom(ROOT).hasClass('pds--invalid', 'looks "invalid"');

    this.set('invalid', false);
    assert
      .dom(ROOT)
      .doesNotHaveClass('pds--invalid', 'does not look "invalid"');
  });
});

async function isRendered(assert) {
  assert
    .dom(ROOT)
    .exists('renders root element')
    .hasTagName('textarea')
    .hasClass('pds-textarea', 'has expected component CSS class')
    .isVisible()
    .isNotDisabled();
}

async function appliesAttributes(assert) {
  assert
    .dom(ROOT)
    .hasAttribute('id', 'foo', 'applies [id] attr')
    .hasAttribute('data-bar', 'buzz', 'applies [data-bar] attr');
}
