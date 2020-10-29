import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-app-footer]'

module('Integration | Components.App.Footer', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`<Pds::App::Footer data-foo="bar" />`)
    assert
      .dom(ROOT)
      .exists()
      .hasAttribute('data-foo', 'bar')
      .hasClass('pds-app__footer')
      .hasNoText()
      .hasTagName('footer')

    // Template block usage:
    await render(hbs`
      <Pds::App::Footer>
        template block text
      </Pds::App::Footer>
    `)

    assert
      .dom(ROOT)
      .hasText('template block text')
  })
})
