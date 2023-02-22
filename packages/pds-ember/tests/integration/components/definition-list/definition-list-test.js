/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-definition-list]';
const KEY = '[data-test-definition-list-key]';
const VALUE = '[data-test-definition-list-value]';

module('Integration | Components.DefinitionList', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders inline', async function (assert) {
    await render(hbs`
      <Pds::DefinitionList
        data-foo="bar"
      />
    `);
    assert
      .dom(ROOT)
      .exists()
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-definitionList')
      .hasNoText();
  });

  test('it renders with block', async function (assert) {
    this.set('stacked', false);
    await render(hbs`
      <Pds::DefinitionList
        @stacked={{stacked}}
        as |DL|
      >
        <DL.Key>key 1</DL.Key>
        <DL.Value>value 1</DL.Value>

        <DL.Key>key 2</DL.Key>
        <DL.Value>value 2</DL.Value>
      </Pds::DefinitionList>
    `);
    assert
      .dom(ROOT)
      .exists()
      .doesNotHaveClass('pds--stacked')
      .hasClass('pds-definitionList')
      .hasText('key 1 value 1 key 2 value 2');

    assert.dom(KEY).exists({ count: 2 });

    assert.dom(VALUE).exists({ count: 2 });

    this.set('stacked', true);
    await settled();
    assert.dom(ROOT).hasClass('pds--stacked');
  });
});
