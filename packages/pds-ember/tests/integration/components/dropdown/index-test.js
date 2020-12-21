import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, click } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'
import sinon from 'sinon'

const ROOT = '[data-test-dropdown]'
const TRIGGER = '[data-test-dropdown-trigger]'
const DIALOG = '[data-test-dropdown-dialog]'

module('Integration | Components.Dropdown', function(hooks) {
  setupRenderingTest(hooks)

  let custom_class = 'custom-class'

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::Dropdown
        data-name="root"
        as |D|
      >
        <D.Trigger data-name="trigger">
          Toggle Dropdown
        </D.Trigger>

        <D.Dialog data-name="dialog">
          dialog content goes here
        </D.Dialog>
      </Pds::Dropdown>
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasText('Toggle Dropdown dialog content goes here')
      .hasAttribute('data-name', 'root', 'applies ...attributes to root')
      .hasClass('pds-dropdown')
      .hasProperty('open', false, 'closed by default')

    assert
      .dom(TRIGGER)
      .exists()
      .hasText('Toggle Dropdown')

    assert
      .dom(DIALOG)
      .exists()
      .isNotVisible()
      .hasText('dialog content goes here')
      .hasAttribute('data-name', 'dialog', 'applies ...attributes to dialog')
  })

  test('it renders @isOpen', async function(assert) {
    await render(hbs`
      <Pds::Dropdown @isOpen={{true}} as |D|>
        <D.Trigger>
          Toggle Dropdown
        </D.Trigger>

        <D.Dialog>
          dialog content goes here
        </D.Dialog>
      </Pds::Dropdown>
    `)

    assert
      .dom(ROOT)
      .hasProperty('open', true, 'renders open')

    assert
      .dom(TRIGGER)
      .hasClass('pds--open', 'applies open modifier class to Trigger')

    assert
      .dom(DIALOG)
      .isVisible()
  })

  test('it closes when clicking away', async function(assert) {
    await render(hbs`
      <div id="outside-element"></div>
      <Pds::Dropdown as |D|>
        <D.Trigger />

        <D.Dialog>
          yadda yadda yadda
        </D.Dialog>
      </Pds::Dropdown>
    `)

    assert
      .dom(ROOT)
      .hasProperty('open', false, 'closed by default')

    await click(TRIGGER)
    assert
      .dom(ROOT)
      .hasProperty('open', true, 'open after trigger')

    await click('#outside-element')
    assert
      .dom(ROOT)
      .hasProperty('open', false, 'closed after clicking outside of dropdown')
  })

  test('it calls @onToggle', async function(assert) {
    let onToggle = sinon.spy()
    this.onToggle = onToggle
    await render(hbs`
      <Pds::Dropdown @onToggle={{onToggle}} as |D|>
        <D.Trigger />

        <D.Dialog>
          yadda yadda yadda
        </D.Dialog>
      </Pds::Dropdown>
    `)

    await click(TRIGGER)
    assert.ok(onToggle.calledWith(true), 'called with `true`')

    await click(TRIGGER)
    assert.ok(onToggle.calledWith(false), 'called with `false`')

    assert.ok(onToggle.calledTwice, 'called twice')
  })

  // used for defining extra class names when yielding an aliased contextual component
  // {{ yield (hash FooDropdown=(component 'pds/dropdown' attr-class='custom-class-name') ) }}
  test('it supports @attr-class', async function(assert) {
    await render(hbs`
      <Pds::Dropdown @attr-class={{this.attrClass}} />
    `)
    assert
      .dom(ROOT)
      .doesNotHaveClass(custom_class, 'does not apply @attr-class')

    this.set('attrClass', custom_class)
    assert
      .dom(ROOT)
      .hasClass(custom_class, 'applies @attr-class')
  })
})

