import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import { CSS } from 'dummy/tests/fixtures/components/button-fixtures';

const ROOT = '[data-test-dropdown-trigger]';
const ICON = '[data-test-dropdown-trigger-icon]';
const BLOCK_CONTENT = '[data-test-dropdown-trigger-block-content]';

module('Integration | Components.DropdownTrigger', function (hooks) {
  setupRenderingTest(hooks);

  test('should render without a template block', async function (assert) {
    await render(hbs`
      <Pds::Dropdown::Trigger
        data-foo="bar"
      />
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasClass('pds-dropdownTrigger', 'has expected CSS class')
      .hasClass(CSS.Button, 'has base CSS class')
      .hasClass(CSS.iconOnly, 'has "icon-only" modifier CSS class')
      .hasAttribute('data-foo', 'bar', 'applies ...attributes');

    assert.dom(ICON).exists();

    assert.dom(BLOCK_CONTENT).doesNotExist();
  });

  test('should render with template block', async function (assert) {
    await render(hbs`
      <Pds::Dropdown::Trigger>
        block text
      </Pds::Dropdown::Trigger>
    `);

    assert.dom(ROOT).hasText('block text');

    assert.dom(ICON).exists();

    assert.dom(BLOCK_CONTENT).exists();
  });

  test('supports @variant', async function (assert) {
    this.set('variant', '');
    await render(hbs`
      <Pds::Dropdown::Trigger
        @variant={{this.variant}}
      />
    `);

    assert
      .dom(ROOT)
      .doesNotHaveClass(CSS.ghost)
      .doesNotHaveClass(CSS.primary)
      .doesNotHaveClass(CSS.warning);

    this.set('variant', 'ghost');
    assert
      .dom(ROOT)
      .hasClass(CSS.ghost)
      .doesNotHaveClass(CSS.primary)
      .doesNotHaveClass(CSS.warning);

    this.set('variant', 'primary');
    assert
      .dom(ROOT)
      .doesNotHaveClass(CSS.ghost)
      .hasClass(CSS.primary)
      .doesNotHaveClass(CSS.warning);

    this.set('variant', 'warning');
    assert
      .dom(ROOT)
      .doesNotHaveClass(CSS.ghost)
      .doesNotHaveClass(CSS.primary)
      .hasClass(CSS.warning);
  });

  test('supports @compact', async function (assert) {
    await render(hbs`
      <Pds::Dropdown::Trigger
        @compact={{this.compact}}
      />
    `);

    assert
      .dom(ROOT)
      .doesNotHaveClass(
        CSS.compact,
        'does not have "compact" modifier CSS class'
      );

    this.set('compact', true);
    assert.dom(ROOT).hasClass(CSS.compact, 'has "compact" modifier CSS class');
  });

  test('supports @hideText', async function (assert) {
    await render(hbs`
      <Pds::Dropdown::Trigger
        @hideText={{this.hideText}}
      >
        block text
      </Pds::Dropdown::Trigger>
    `);

    assert
      .dom(ROOT)
      .hasText('block text')
      .doesNotHaveClass(
        CSS.iconOnly,
        'does not have "icon-only" modifier CSS class'
      );

    assert
      .dom(BLOCK_CONTENT)
      .doesNotHaveClass(
        CSS.visuallyHidden,
        'does not have "visually-hidden" modifier CSS class'
      );

    // @hideText={{true}}
    this.set('hideText', true);
    assert
      .dom(ROOT)
      .hasText('block text')
      .hasClass(CSS.iconOnly, 'has "icon-only" modifier CSS class');

    assert
      .dom(BLOCK_CONTENT)
      .hasClass(CSS.visuallyHidden, 'has "visually-hidden" modifier CSS class');
  });

  test('supports @isOpen', async function (assert) {
    let _class = 'pds--open';
    await render(hbs`
      <Pds::Dropdown::Trigger
        @isOpen={{this.isOpen}}
      >
        block text
      </Pds::Dropdown::Trigger>
    `);

    assert
      .dom(ROOT)
      .doesNotHaveClass(_class, 'does not apply open modifier CSS class');

    // @isOpen={{true}}
    this.set('isOpen', true);
    assert.dom(ROOT).hasClass(_class, 'applies open modifier CSS class');
  });
});
