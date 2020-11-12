import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, settled } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-radio-facade]'
const TICK = '[data-test-radio-facade-tick]'

module('Integration | Components.RadioField.Facade', function(hooks) {
  setupRenderingTest(hooks)

  test('it does not render block content', async function(assert) {
    await render(hbs`
      <Pds::RadioField::Facade>
        template block text
      </Pds::RadioField::Facade>
    `)

    assert
      .dom(ROOT)
      .hasNoText()
  })

  test('it renders inline', async function(assert) {
    await render(hbs`
      <Pds::RadioField::Facade
        data-foo="bar"
      />
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-radioFacade')

    assert
      .dom(TICK)
      .exists()
      .hasStyle({ visibility: 'hidden' })
  })
})

