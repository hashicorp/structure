import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-empty-state]';
const HEADER = '[data-test-empty-state-header]';
const BODY = '[data-test-empty-state-body]';
const FOOTER = '[data-test-empty-state-footer]';

module('Integration | Components.EmptyState', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render without a template block', async function (assert) {
    await render(hbs`
      <Pds::EmptyState
        data-foo="bar"
      />
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-emptyState');
  });

  test('it renders yielded subcomponents', async function (assert) {
    await render(hbs`
      <Pds::EmptyState as |E|>
        <E.Header data-name="header">
          header
        </E.Header>

        <E.Body data-name="body">
          body
        </E.Body>

        <E.Footer data-name="footer">
          footer
        </E.Footer>
      </Pds::EmptyState>
    `);

    assert.dom(ROOT).hasText('header body footer');

    assert
      .dom(HEADER)
      .exists()
      .hasAttribute('data-name', 'header', 'applies ...attributes to Header')
      .hasClass('pds-emptyState__header');

    assert
      .dom(BODY)
      .exists()
      .hasAttribute('data-name', 'body', 'applies ...attributes to Body')
      .hasClass('pds-emptyState__body');

    assert
      .dom(FOOTER)
      .exists()
      .hasAttribute('data-name', 'footer', 'applies ...attributes to Footer')
      .hasClass('pds-emptyState__footer');
  });
});
