import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-app-body]'

module('Integration | Components.App.Body', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`<Pds::App::Body data-foo="bar" />`)
    assert
      .dom(ROOT)
      .exists()
      .hasAttribute('data-foo', 'bar')
      .hasAttribute('id', 'content')
      .hasAttribute('role', 'main')
      .hasClass('pds-app__body')
      .hasNoText()
      .hasTagName('main')

    // Template block usage:
    await render(hbs`
      <Pds::App::Body>
        template block text
      </Pds::App::Body>
    `)

    assert
      .dom(ROOT)
      .hasText('template block text')
  })
})
