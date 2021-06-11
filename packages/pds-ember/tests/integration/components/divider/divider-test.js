import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-divider]'
const RULE = '[data-test-divider-rule]'

module('Integration | Components.Divider', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::Divider
        data-foo="bar"
        @vertical={{isVertical}}
      />
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-divider')
      .hasClass('pds--horizontal', 'horizontal by default')

    this.set('isVertical', true)
    assert
      .dom(ROOT)
      .hasClass('pds--vertical', 'changes to vertical')
  })

  test('it ignores template block content', async function(assert) {
    await render(hbs`
      <Pds::Divider>
        template block text
      </Pds::Divider>
    `)

    assert
      .dom(ROOT)
      .hasNoText()
  })
})

