import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-avatar]'
const ICON = '[data-test-avatar-icon]'
const IMG = '[data-test-avatar-img]'
const DEFAULT_ALT = 'user avatar'

module('Integration | Components.Avatar', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::Avatar
        @alt={{this.alt}}
        @src={{this.src}}
        data-foo="bar"
      >
        template block text
      </Pds::Avatar>
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasNoText('ignores template block')
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasAttribute('aria-hidden', 'true', 'applies [aria-hidden]')
      .hasClass('pds-avatar')
    assert
      .dom(ICON)
      .exists()
      .hasAttribute('data-test-icon-type', 'user-square-outline')
      .hasAttribute('aria-label', DEFAULT_ALT, 'applies default alt text to Icon')
    assert
      .dom(IMG)
      .doesNotExist()

    let custom_alt = 'custom alt'
    this.set('alt', custom_alt)
    assert
      .dom(ICON)
      .exists()
      .hasAttribute('data-test-icon-type', 'user-square-outline')
      .hasAttribute('aria-label', custom_alt, 'applies custom alt text to Icon')

    let custom_src = 'User-Avatar.png'
    this.set('src', custom_src)
    assert
      .dom(IMG)
      .exists()
      .hasAttribute('src', custom_src, 'applies [src] to rendered <img>')
      .hasAttribute('alt', custom_alt, 'applies custom img[alt]')
    assert
      .dom(ICON)
      .doesNotExist()

    this.set('alt', '')
    assert
      .dom(IMG)
      .hasAttribute('alt', DEFAULT_ALT, 'applies default img[alt]')
  })
})

