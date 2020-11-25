import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, triggerKeyEvent, click } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'
import sinon from 'sinon'

const ROOT = '[data-test-modal]'
const TITLE = '[data-test-modal-title]'
const BODY = '[data-test-modal-body]'
const FOOTER = '[data-test-modal-footer]'
const ICON = '[data-test-modal-icon]'
const CLOSE_BUTTON = '[data-test-modal-close-button]'

module('Integration | Components.Modal', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders without content', async function(assert) {
    await render(hbs`
      <Pds::Modal />
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()

    assert
      .dom(ICON)
      .exists()
      .isVisible()

    // should be able to close an empty modal via the "x" button
    assert
      .dom(CLOSE_BUTTON)
      .exists()
      .isVisible()
  })

  test('it renders', async function(assert) {
    this.set('title', 'title')
    await render(hbs`
      <Pds::Modal
        @title={{title}}
        @variant={{variant}}
        data-name="modal"
        as |M|
      >
        <M.Body data-name="body">
          body
        </M.Body>

        <M.Footer data-name="footer">
          footer
        </M.Footer>
      </Pds::Modal>
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasText('title body footer')
      .hasAttribute('data-name', 'modal', 'applies Modal ...attributes')
      .hasClass('pds-modal')

    assert
      .dom(CLOSE_BUTTON)
      .exists()
      .isVisible()

    assert
      .dom(TITLE)
      .exists()
      .hasText('title')

    assert
      .dom(BODY)
      .exists()
      .hasAttribute('data-name', 'body', 'applies Body ...attributes')
      .hasText('body')

    assert
      .dom(FOOTER)
      .exists()
      .hasAttribute('data-name', 'footer', 'applies Footer ...attributes')
      .hasText('footer')

    // Default/Plain Variant
    assert
      .dom(ROOT)
      .hasClass('pds-modal--plain')
    assert
      .dom(ICON)
      .exists()
      .hasAttribute('data-test-icon-type', 'alert-circle-fill', 'applies correct icon')

    // Error Variant
    this.set('variant', 'error')
    assert
      .dom(ROOT)
      .hasClass('pds-modal--error')
    assert
      .dom(ICON)
      .exists()
      .hasAttribute('data-test-icon-type', 'cancel-square-fill', 'applies correct icon')

    // Info Variant
    this.set('variant', 'info')
    assert
      .dom(ROOT)
      .hasClass('pds-modal--info')
    assert
      .dom(ICON)
      .exists()
      .hasAttribute('data-test-icon-type', 'info-circle-fill', 'applies correct icon')

    // Success Variant
    this.set('variant', 'success')
    assert
      .dom(ROOT)
      .hasClass('pds-modal--success')
    assert
      .dom(ICON)
      .exists()
      .hasAttribute('data-test-icon-type', 'check-circle-fill', 'applies correct icon')

    // Success Variant
    this.set('variant', 'warning')
    assert
      .dom(ROOT)
      .hasClass('pds-modal--warning')
    assert
      .dom(ICON)
      .exists()
      .hasAttribute('data-test-icon-type', 'alert-triangle', 'applies correct icon')
  })

  test('it calls @onClose', async function(assert) {
    let onClose = sinon.spy()
    this.onClose = onClose

    await render(hbs`
      <Pds::Modal @onClose={{onClose}} />
    `)

    assert.ok(onClose.notCalled, 'not called on initial render')

    await click(CLOSE_BUTTON)
    assert.ok(onClose.calledOnce, 'called when clicking close button')

    // NOTE: This test emits an event from the ROOT element (where the listener
    //       is applied).  In practice, 'keyup' events will not trigger unless
    //       focus is _within_ the Modal.
    await triggerKeyEvent(ROOT, 'keyup', 'Escape')
    assert.ok(onClose.calledTwice, 'called when "Esc" is pressed')
  })
})

