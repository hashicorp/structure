import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-logomark]'
const WRAPPER = '[data-test-logomark-wrapper]'

module('Integration | Components.Logomark', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::Logomark
        data-foo="bar"
      />
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-logomark')

    assert
      .dom(WRAPPER)
      .exists()
      .hasAttribute('aria-hidden', 'true')

    // Template block usage:
    await render(hbs`
      <Pds::Logomark>
        template block text
      </Pds::Logomark>
    `)

    assert
      .dom(ROOT)
      .hasText('template block text')
  })
})

