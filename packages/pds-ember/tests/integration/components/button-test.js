import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import { CSS } from 'dummy/tests/fixtures/components/button-fixtures'

// TODO: consider migrating these selectors to a page object
const ROOT = '[data-test-root]'
const CHILDREN = `${ROOT} > *`
const ICON_START = '[data-test-icon-start]'
const ICON_END = '[data-test-icon-end]'
const BLOCK_CONTENT = '[data-test-block-content]'

module('Integration | Components.Button', function(hooks) {
  setupRenderingTest(hooks);

  test('should render without a template block', async function(assert) {
    await render(hbs`
      <Pds::Button
        @hideText={{this.hideText}}
        @type={{this.type}}
      />
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasClass(CSS.Button, 'has base CSS class')
      .hasClass(CSS.iconOnly, 'has "icon-only" modifier CSS class')
      .hasAttribute('type', 'button', 'has "button" type')

    // element children should not exist
    assert.dom(CHILDREN).doesNotExist()

    // block content wrapper shouldn't render
    assert.dom(BLOCK_CONTENT).doesNotExist()

    // @hideText shouldn't affect presence of "icon-only" CSS class
    this.set('hideText', true)
    assert.dom(ROOT).hasClass(CSS.iconOnly, 'has "icon-only" modifier CSS class')

    // @type should set the [type] attr
    this.set('type', 'submit')
    assert.dom(ROOT).hasAttribute('type', 'submit', 'has "submit" type')

    // when @type is falsy, it should apply [type="button"]
    this.set('type', '')
    assert.dom(ROOT).hasAttribute('type', 'button', 'defaults to "button" type')
  })


  test('should render icons', async function(assert) {
    await render(hbs`
      <Pds::Button
        @iconStart={{this.iconStart}}
        @iconEnd={{this.iconEnd}}
      />
    `)

    // no icons by default
    assert.dom(ICON_START).doesNotExist()
    assert.dom(ICON_END).doesNotExist()
    assert
      .dom(ROOT)
      .doesNotHaveClass(CSS.iconStart, 'does not have "icon start" modifier CSS class')
      .doesNotHaveClass(CSS.iconEnd, 'does not have "icon end" modifier CSS class')

    // @iconStart='test-icon'
    this.set('iconStart', 'test-icon')
    // start icon only
    assert.dom(ICON_START).exists()
    assert.dom(ICON_END).doesNotExist()
    assert
      .dom(ROOT)
      .hasClass(CSS.iconStart, 'has "icon start" modifier CSS class')
      .doesNotHaveClass(CSS.iconEnd, 'does not have "icon end" modifier CSS class')

    // @iconEnd='test-icon'
    this.set('iconEnd', 'test-icon')
    // both start and end icons
    assert.dom(ICON_START).exists()
    assert.dom(ICON_END).exists()
    assert
      .dom(ROOT)
      .hasClass(CSS.iconStart, 'has "icon start" modifier CSS class')
      .hasClass(CSS.iconEnd, 'has "icon end" modifier CSS class')

    // remove start icon
    this.set('iconStart', '')
    // end icon only
    assert.dom(ICON_START).doesNotExist()
    assert.dom(ICON_END).exists()
    assert
      .dom(ROOT)
      .doesNotHaveClass(CSS.iconStart, 'does not have "icon start" modifier CSS class')
      .hasClass(CSS.iconEnd, 'has "icon end" modifier CSS class')

    // remove end icon
    this.set('iconEnd', '')
    // no icons
    assert.dom(ICON_START).doesNotExist()
    assert.dom(ICON_END).doesNotExist()
    assert
      .dom(ROOT)
      .doesNotHaveClass(CSS.iconStart, 'does not have "icon start" modifier CSS class')
      .doesNotHaveClass(CSS.iconEnd, 'does not have "icon end" modifier CSS class')
  })


  test('should render with an empty template block', async function(assert) {
    await render(hbs`
      <Pds::Button
        @hideText={{this.hideText}}
      ></Pds::Button>
    `)

    // should render an empty <span>
    assert.dom(CHILDREN).exists()

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasClass('pds-button', 'has base CSS class')
      .doesNotHaveClass(CSS.iconOnly, 'does not have "icon-only" modifier CSS class')
    assert
      .dom(BLOCK_CONTENT)
      .exists()
      .doesNotHaveClass(CSS.visuallyHidden, 'does not have "visually-hidden" modifier CSS class')

    // @hideText={{true}}
    this.set('hideText', true)
    assert
      .dom(ROOT)
      .hasClass(CSS.iconOnly, 'has "icon-only" modifier CSS class')
    assert
      .dom(BLOCK_CONTENT)
      .hasClass(CSS.visuallyHidden, 'has "visually-hidden" modifier CSS class')
  })


  test('supports @variant', async function(assert) {
    this.set('variant', '')
    await render(hbs`
      <Pds::Button
        @variant={{this.variant}}
      />
    `)

    assert
      .dom(ROOT)
      .doesNotHaveClass(CSS.ghost)
      .doesNotHaveClass(CSS.primary)
      .doesNotHaveClass(CSS.warning)

    this.set('variant', 'ghost')
    assert
      .dom(ROOT)
      .hasClass(CSS.ghost)
      .doesNotHaveClass(CSS.primary)
      .doesNotHaveClass(CSS.warning)

    this.set('variant', 'primary')
    assert
      .dom(ROOT)
      .doesNotHaveClass(CSS.ghost)
      .hasClass(CSS.primary)
      .doesNotHaveClass(CSS.warning)

    this.set('variant', 'warning')
    assert
      .dom(ROOT)
      .doesNotHaveClass(CSS.ghost)
      .doesNotHaveClass(CSS.primary)
      .hasClass(CSS.warning)
  })


  test('supports @compact', async function(assert) {
    await render(hbs`
      <Pds::Button @compact={{this.compact}} />
    `)

    assert
      .dom(ROOT)
      .doesNotHaveClass(CSS.compact, 'does not have "compact" modifier CSS class')

    this.set('compact', true)
    assert
      .dom(ROOT)
      .hasClass(CSS.compact, 'has "compact" modifier CSS class')
  })


  test('supports @hideText', async function(assert) {
    await render(hbs`
      <Pds::Button
        @hideText={{this.hideText}}
      >
        block text
      </Pds::Button>
    `)

    assert
      .dom(ROOT)
      .hasText('block text')
      .doesNotHaveClass(CSS.iconOnly, 'does not have "icon-only" modifier CSS class')

    assert
      .dom(BLOCK_CONTENT)
      .doesNotHaveClass(CSS.visuallyHidden, 'does not have "visually-hidden" modifier CSS class')

    // @hideText={{true}}
    this.set('hideText', true)
    assert
      .dom(ROOT)
      .hasText('block text')
      .hasClass(CSS.iconOnly, 'has "icon-only" modifier CSS class')

    assert
      .dom(BLOCK_CONTENT)
      .hasClass(CSS.visuallyHidden, 'has "visually-hidden" modifier CSS class')
  })
});

