import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-page]'
const HEADER = '[data-test-page-header]'
const BODY = '[data-test-page-body]'

module('Integration | Components.Page', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::Page
        data-foo="bar"
        as |P|
      >
        <P.Header data-name="header">
          header
        </P.Header>

        <P.Body data-name="body">
          body
        </P.Body>
      </Pds::Page>
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasText('header body')
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-page')

    assert
      .dom(HEADER)
      .exists()
      .hasText('header')
      .hasAttribute('data-name', 'header', 'applies Header ...attributes')
      .hasClass('pds-pageHeader') // alias for <Pds::PageHeader>

    assert
      .dom(BODY)
      .exists()
      .hasText('body')
      .hasAttribute('data-name', 'body', 'applies Body ...attributes')
  })
})

