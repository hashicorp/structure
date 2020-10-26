import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-loading-header]'

module('Integration | Components.Loading.Header', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::Loading::Header
        data-foo="bar"
      >
        Header Content
      </Pds::Loading::Header>
    `)

    assert
      .dom(ROOT)
      .exists()
      .containsText('Header Content')
      .hasClass('pds-loading__header')
      .hasAttribute('data-foo', 'bar')
  })
})
