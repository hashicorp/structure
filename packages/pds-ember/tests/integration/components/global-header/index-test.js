import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-global-header]'
const LOGO = '[data-test-logo]'
const PRIMARY_NAV = '[data-test-primary-nav]'
const SECONDARY_NAV = '[data-test-secondary-nav]'
const SWITCHER = '[data-test-switcher]'
const USER_MENU = '[data-test-user-menu]'

module('Integration | Components.GlobalHeader', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::GlobalHeader data-foo="bar">
        template block text
      </Pds::GlobalHeader>
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasText('template block text')
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-globalHeader')

    assert.dom(LOGO).doesNotExist()
    assert.dom(PRIMARY_NAV).doesNotExist()
    assert.dom(SECONDARY_NAV).doesNotExist()
    assert.dom(SWITCHER).doesNotExist()
    assert.dom(USER_MENU).doesNotExist()
  })

  test('it renders contextual subcomponents', async function(assert) {
    await render(hbs`
      <Pds::GlobalHeader as |H|>
        <H.Logo data-test-logo />
        <H.PrimaryNav data-test-primary-nav />
        <H.SecondaryNav data-test-secondary-nav />
        <H.Switcher data-test-switcher />
        <H.UserMenu data-test-user-menu />
      </Pds::GlobalHeader>
    `)

    assert
      .dom(ROOT)
      .hasNoText()

    assert
      .dom(LOGO)
      .exists()

    assert
      .dom(PRIMARY_NAV)
      .exists()
      .hasClass('pds-globalHeader__primaryNav', 'applies @attr-class to PrimaryNav')
      .hasClass('pds-globalHeader__nav', 'is alias for GlobalHeader::Nav')

    assert
      .dom(SECONDARY_NAV)
      .exists()
      .hasClass('pds-globalHeader__secondaryNav', 'applies @attr-class to SecondaryNav')
      .hasClass('pds-globalHeader__nav', 'is alias for GlobalHeader::Nav')

    assert
      .dom(SWITCHER)
      .exists()
      .hasClass('pds-globalHeader__switcher', 'applies @attr-class to Switcher')
      .hasClass('pds-dropdown', 'is alias for Dropdown')

    assert
      .dom(USER_MENU)
      .exists()
      .hasClass('pds-globalHeader__userMenu', 'applies @attr-class to UserMenu')
      .hasClass('pds-dropdown', 'is alias for Dropdown')
  })
})

