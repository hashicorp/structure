import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-app-modal-area]'

module('Integration | Components.App.ModalArea', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`<Pds::App::ModalArea data-foo="bar" />`)
    assert
      .dom(ROOT)
      .exists()
      .hasAttribute('data-foo', 'bar')
      .hasClass('pds-app__modalArea')
      .hasNoText()

    // Template block usage:
    await render(hbs`
      <Pds::App::ModalArea>
        template block text
      </Pds::App::ModalArea>
    `)

    assert
      .dom(ROOT)
      .hasText('template block text')
  })
})
