import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, click } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'
import sinon from 'sinon'

const ROOT = '[data-test-popup]'
const ICON = '[data-test-popup-icon]'
const HEADER = '[data-test-popup-header]'
const BODY = '[data-test-popup-body]'
const FOOTER = '[data-test-popup-footer]'
const CLOSE_BTN = '[data-test-popup-close-button]'

module('Integration | Components.Popup', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders inline', async function(assert) {
    await render(hbs`<Pds::Popup />`)

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasClass('pds-popup')

    assert
      .dom(ICON)
      .exists()

    assert
      .dom(CLOSE_BTN)
      .exists()

    assert
      .dom(HEADER)
      .doesNotExist()

    assert
      .dom(BODY)
      .doesNotExist()

    assert
      .dom(FOOTER)
      .doesNotExist()
  })

  test('it renders contextual components', async function(assert) {
    await render(hbs`
      <Pds::Popup data-name="root" as |P|>
        <P.Header data-name="header">
          header
        </P.Header>

        <P.Body data-name="body">
          body
        </P.Body>

        <P.Footer data-name="footer">
          footer
        </P.Footer>
      </Pds::Popup>
    `)

    assert
      .dom(ROOT)
      .hasText('header body footer')
      .hasAttribute('data-name', 'root', 'applies root ...attributes')

    assert
      .dom(HEADER)
      .exists()
      .hasText('header')
      .hasAttribute('data-name', 'header', 'applies header ...attributes')
      .hasClass('pds-popup__header')

    assert
      .dom(BODY)
      .exists()
      .hasText('body')
      .hasAttribute('data-name', 'body', 'applies body ...attributes')
      .hasClass('pds-popup__body')

    assert
      .dom(FOOTER)
      .exists()
      .hasText('footer')
      .hasAttribute('data-name', 'footer', 'applies footer ...attributes')
      .hasClass('pds-popup__footer')
  })

  test('it calls @onClose', async function(assert) {
    let onClose = sinon.spy()
    this.onClose = onClose

    await render(hbs`
      <Pds::Popup @onClose={{onClose}} as |P|>
        <P.Header>Title</P.Header>
      </Pds::Popup>
    `)

    assert.ok(onClose.notCalled, 'not called on initial render')

    await click(CLOSE_BTN)
    assert.ok(onClose.calledOnce, 'called after click')

    await click(CLOSE_BTN)
    assert.ok(onClose.calledTwice, 'called twice after two clicks')
  })
})

