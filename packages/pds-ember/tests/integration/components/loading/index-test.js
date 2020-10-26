import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-loading]'

module('Integration | Components.Loading', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::Loading
        data-foo="bar"
      >
        block content
      </Pds::Loading>
    `)

    assert
      .dom(ROOT)
      .exists()
      .containsText('block content')
      .hasClass('pds-loading')
      .hasAttribute('data-foo', 'bar')
  })
})

