import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-global-header-logo]'

module('Integration | Components.GlobalHeader.Logo', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::GlobalHeader::Logo
        data-foo="bar"
      >
        template block text
      </Pds::GlobalHeader::Logo>
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasNoText('ignores template block')
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-globalHeader__logo')
  })
})

