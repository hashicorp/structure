import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-error-state]';
const BODY = '[data-test-error-state-body]';
const FOOTER = '[data-test-error-state-footer]';
const ICON = '[data-test-error-state-icon]';
const TITLE = '[data-test-error-state-title]';
const SUBTITLE = '[data-test-error-state-subtitle]';

module('Integration | Components.ErrorState', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Pds::ErrorState>
        template block text
      </Pds::ErrorState>
    `);

    assert.dom(ROOT).exists().hasClass('pds-errorState');

    assert.dom(ICON).exists();

    assert.dom(TITLE).doesNotExist();

    assert.dom(SUBTITLE).doesNotExist();

    assert.dom(BODY).doesNotExist();

    assert.dom(FOOTER).doesNotExist();
  });

  test('it renders contextual components', async function (assert) {
    await render(hbs`
      <Pds::ErrorState data-name="error-state" as |E|>
        <E.Body data-name="body">
          body
        </E.Body>

        <E.Footer data-name="footer">
          footer
        </E.Footer>
      </Pds::ErrorState>
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasAttribute('data-name', 'error-state', 'applies root ..attributes')
      .hasClass('pds-errorState');

    assert
      .dom(BODY)
      .exists()
      .hasText('body')
      .hasAttribute('data-name', 'body', 'applies body ...attributes')
      .hasClass('pds-errorState__body');

    assert
      .dom(FOOTER)
      .exists()
      .hasText('footer')
      .hasAttribute('data-name', 'footer', 'applies footer ...attributes')
      .hasClass('pds-errorState__footer');
  });

  test('it supports @title', async function (assert) {
    await render(hbs`
      <Pds::ErrorState
        @title="Custom Title"
      />
    `);

    assert.dom(TITLE).hasText('Custom Title');
  });

  test('it supports @subtitle', async function (assert) {
    await render(hbs`
      <Pds::ErrorState
        @subtitle="Custom Subtitle"
      />
    `);

    assert.dom(SUBTITLE).hasText('Custom Subtitle');
  });

  test('it supports @icon', async function (assert) {
    await render(hbs`
      <Pds::ErrorState
        @icon={{this.icon}}
      />
    `);

    assert
      .dom(ICON)
      .hasAttribute(
        'data-test-icon-type',
        'alert-circle-outline',
        'applies default icon'
      );

    this.set('icon', 'disabled');
    assert
      .dom(ICON)
      .hasAttribute('data-test-icon-type', 'disabled', 'applies custom icon');
  });
});
