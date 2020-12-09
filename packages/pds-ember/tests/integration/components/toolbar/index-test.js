import { module, test, skip } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-toolbar]'
const START = '[data-test-toolbar-start]'
const END = '[data-test-toolbar-end]'
const LABEL = '[data-test-toolbar-label]'
const DIVIDER = '[data-test-toolbar-divider]'

module('Integration | Components.Toolbar', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::Toolbar data-name="toolbar" as |T|>
        <T.Start data-name="start">
          start
        </T.Start>

        <T.End data-name="end">
          end
        </T.End>

        <T.Label data-name="label">
          label
        </T.Label>

        <T.Divider data-name="divider" />
      </Pds::Toolbar>
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasText('start end label')
      .hasClass('pds-toolbar')
      .hasAttribute('data-name', 'toolbar', 'applies Root ...attributes')

    assert
      .dom(START)
      .exists()
      .hasText('start')
      .hasClass('pds-toolbar__start')
      .hasAttribute('data-name', 'start', 'applies Start ...attributes')

    assert
      .dom(END)
      .exists()
      .hasText('end')
      .hasClass('pds-toolbar__end')
      .hasAttribute('data-name', 'end', 'applies End ...attributes')

    assert
      .dom(LABEL)
      .exists()
      .hasText('label')
      .hasClass('pds-toolbar__label')
      .hasAttribute('data-name', 'label', 'applies Label ...attributes')

    assert
      .dom(DIVIDER)
      .exists()
      .hasClass('pds-toolbar__divider')
      .hasAttribute('data-name', 'divider', 'applies Divider ...attributes')
  })
})

