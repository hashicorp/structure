import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, blur, focus } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

import * as Fixtures from 'dummy/tests/fixtures/components/input-fixtures'
import { stringify } from 'dummy/tests/test-utils'

const ROOT = '[data-test-root]'

module('Integration | Component | Input', function(hooks) {
  setupRenderingTest(hooks)

  test('should ignore block content', async function(assert) {
    await render(hbs`
      <Pds::Input>
        block content
      </Pds::Input>
    `)

    await isRendered(assert)

    assert
      .dom(ROOT)
      .hasNoText()
  })

  test('should render without arguments', async function(assert) {
    await render(hbs`<Pds::Input />`)

    await isRendered(assert)
    await looksLikeText(assert)

    assert
      .dom(ROOT)
      .hasAttribute('type', 'text', 'renders as "text" type')
  })

  test('should modify attr state on blur', async function(assert) {
    await render(hbs`<Pds::Input />`)
    await isRendered(assert)

    await focus(ROOT)
    assert
      .dom(ROOT)
      .doesNotHaveAttribute('pds-dirty', 'is "clean"')
      .doesNotHaveAttribute('pds-touched', 'is "untouched"')

    await blur(ROOT)
    assert
      .dom(ROOT)
      .hasAttribute('pds-dirty', '', 'is "dirty"')
      .hasAttribute('pds-touched', '', 'is "touched"')
  })

  test('should pass through attrs', async function(assert) {
    await render(hbs`
      <Pds::Input
        @type="radio"
        aria-label="fizzbuzz"
        data-foo="bar"
        id="foo"
        type="checkbox"
      />
    `)

    // Skipping assertion because there is a bug when overriding [type].
    // See https://github.com/emberjs/ember.js/issues/18232
    //assert
    //  .dom(ROOT)
    //  .hasAttribute('type', 'checkbox', '[type] overrides @ilk')

    assert
      .dom(ROOT)
      .hasAttribute('id', 'foo', '[id] passed through')
      .hasAttribute('data-foo', 'bar', '[data-*] attr passed through')
      .hasAttribute('aria-label', 'fizzbuzz', '[aria-*] attr passed through')
  })

  test('should modify visual validity', async function(assert) {
    this.set('invalid', false)

    await render(hbs`<Pds::Input @invalid={{this.invalid}} />`)

    assert
      .dom(ROOT)
      .doesNotHaveClass('pds--invalid', 'does not look "invalid"')

    this.set('invalid', true)

    assert
      .dom(ROOT)
      .hasClass('pds--invalid', 'looks "invalid"')
  })

  // ----------------------------------------
  // Various Values
  // ----------------------------------------
  Fixtures.INVALID.forEach(ilk => {
    let desc = stringify(ilk)
    test(`should render @type={{${desc}}} as expected`, async function(assert) {
      this.set('type', ilk)

      await render(hbs`<Pds::Input @type={{this.type}} />`)

      await isRendered(assert)

      assert
        .dom(ROOT)
        .hasAttribute('type', 'text', 'renders with [type="text"]')
    })
  })

  Fixtures.VALID.forEach(ilk => {
    let desc = stringify(ilk)
    test(`should render @type={{${desc}}} as expected`, async function(assert) {
      this.set('type', ilk)

      await render(hbs`<Pds::Input @type={{this.type}} />`)

      await isRendered(assert)

      assert
        .dom(ROOT)
        .hasAttribute('type', ilk, 'renders with expected [type]')
    })
  })

  Fixtures.VALID_TEXT_LIKE.forEach(ilk => {
    let desc = stringify(ilk)
    test(`should render @type={{${desc}}} as expected`, async function(assert) {
      this.set('type', ilk)

      await render(hbs`<Pds::Input @type={{this.type}} />`)

      await isRendered(assert)
      await looksLikeText(assert)
    })
  })

  Fixtures.VALID_NON_TEXT_LIKE.forEach(ilk => {
    let desc = stringify(ilk)
    test(`should render @type={{${desc}}} as expected`, async function(assert) {
      this.set('type', ilk)

      await render(hbs`<Pds::Input @type={{this.type}} />`)

      await isRendered(assert)

      assert
        .dom(ROOT)
        .hasAttribute('type', ilk, 'renders with expected [type]')
        .doesNotHaveClass('pds--textLike', 'does not look like text input')
    })
  })
})

// HELPER FUNCTIONS
async function isRendered(assert) {
  assert
    .dom(ROOT)
    .exists('renders root element')
    .hasClass('pds-input', 'has expected component CSS class')
    .isVisible()
    // NOTE: The following assertions may not always apply.
    //       They may need moved to a different helper, in the future.
    .isNotDisabled()
    .isNotRequired()
    .isValid()
}

async function looksLikeText(assert) {
  assert
    .dom(ROOT)
    .hasClass('pds--textLike', 'looks like a text input')
}
