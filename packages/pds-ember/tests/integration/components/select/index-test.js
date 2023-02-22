/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, focus } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-root]';
const CONTROL = '[data-test-control]';
const FACADE = '[data-test-facade]';

module('Integration | Components.Select', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders inline without arguments', async function (assert) {
    await render(hbs`
      <Pds::Select
        data-foo="bar"
        id="foobar"
        name="wizbang"
      />
    `);
    assert.dom(ROOT).exists();
    assert.dom(FACADE).exists();
    assert
      .dom(CONTROL)
      .exists()
      .hasAttribute('id', 'foobar', 'passed through [id] attr')
      .hasAttribute('data-foo', 'bar', 'passed through [data-foo] attr');
    assert.dom('option').doesNotExist();

    await focus(CONTROL);
    assert
      .dom(CONTROL)
      .doesNotHaveAttribute('pds-dirty', 'is clean')
      .doesNotHaveAttribute('pds-touched', 'is untouched');

    // TODO - Fix this
    // await blur(CONTROL);
    // assert
    //   .dom(CONTROL)
    //   .hasAttribute('pds-dirty', '', 'is dirty')
    //   .hasAttribute('pds-touched', '', 'is touched');
  });

  test('it renders inline with just @options', async function (assert) {
    this.set('options', [1, 2, 3]);
    await render(hbs`
      <Pds::Select
        @options={{this.options}}
      />
    `);
    assert.dom(ROOT).exists();
    assert.dom(FACADE).exists();
    assert.dom(CONTROL).exists();
    assert.dom('select option').exists({ count: 3 });
    assert.dom('select option:nth-child(1)').hasProperty('selected', true);
    assert.dom('select option:nth-child(2)').hasProperty('selected', false);
    assert.dom('select option:nth-child(3)').hasProperty('selected', false);
  });

  test('it renders inline with @options and matching @value', async function (assert) {
    this.set('options', [1, 2, 3]);
    this.set('value', 2);
    await render(hbs`
      <Pds::Select
        @options={{this.options}}
        @value={{this.value}}
      />
    `);
    assert.dom(ROOT).exists();
    assert.dom(FACADE).exists();
    assert.dom(CONTROL).exists();
    assert.dom('select option').exists({ count: 3 });
    assert.dom('select option:nth-child(1)').hasProperty('selected', false);
    assert.dom('select option:nth-child(2)').hasProperty('selected', true);
    assert.dom('select option:nth-child(3)').hasProperty('selected', false);
  });

  test('it renders inline with @options and non-matching @value', async function (assert) {
    this.set('options', [1, 2, 3]);
    this.set('value', 42);
    await render(hbs`
      <Pds::Select
        @options={{this.options}}
        @value={{this.value}}
      />
    `);
    assert.dom(ROOT).exists();
    assert.dom(FACADE).exists();
    assert.dom(CONTROL).exists();
    assert.dom('select option').exists({ count: 3 });
    assert.dom('select option:nth-child(1)').hasProperty('selected', true);
    assert.dom('select option:nth-child(2)').hasProperty('selected', false);
    assert.dom('select option:nth-child(3)').hasProperty('selected', false);
  });

  // BLOCK
  test('it renders with simple options as block content', async function (assert) {
    this.set('options', []);
    await render(hbs`
      <Pds::Select
        @options={{this.options}}
      >
        <option>Option 1</option>
        <option selected>Option 2</option>
        <option>Option 3</option>
      </Pds::Select>
    `);
    assert.dom(ROOT).exists();
    assert.dom(FACADE).exists();
    assert.dom(CONTROL).exists();
    // @options should be ignored.
    // If the following pass, then we know @options is ignored (as intended).
    assert.dom('select option').exists({ count: 3 });
    assert.dom('select optgroup').doesNotExist();
    assert.dom('select option:nth-child(1)').hasProperty('selected', false);
    assert.dom('select option:nth-child(2)').hasProperty('selected', true);
    assert.dom('select option:nth-child(3)').hasProperty('selected', false);
  });

  test('it renders with grouped options as block content', async function (assert) {
    await render(hbs`
      <Pds::Select>
        <optgroup label="Group A">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </optgroup>
        <optgroup label="Group B">
          <option>Option 4</option>
          <option selected>Option 5</option>
          <option>Option 6</option>
        </optgroup>
      </Pds::Select>
    `);
    assert.dom(ROOT).exists();
    assert.dom(FACADE).exists();
    assert.dom(CONTROL).exists();
    assert.dom('select option').exists({ count: 6 });
    assert.dom('select optgroup').exists({ count: 2 });
    // first <optgroup>
    assert
      .dom('optgroup:nth-child(1) option:nth-of-type(1)')
      .hasProperty('selected', false);
    assert
      .dom('optgroup:nth-child(1) option:nth-of-type(2)')
      .hasProperty('selected', false);
    assert
      .dom('optgroup:nth-child(1) option:nth-of-type(3)')
      .hasProperty('selected', false);
    // second <optgroup>
    assert
      .dom('optgroup:nth-child(2) option:nth-of-type(1)')
      .hasProperty('selected', false);
    assert
      .dom('optgroup:nth-child(2) option:nth-of-type(2)')
      .hasProperty('selected', true);
    assert
      .dom('optgroup:nth-child(2) option:nth-of-type(3)')
      .hasProperty('selected', false);
  });
});
