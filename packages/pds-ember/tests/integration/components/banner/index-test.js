import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-banner]';
const HEADER = '[data-test-banner-header]';
const BODY = '[data-test-banner-body]';
const FOOTER = '[data-test-banner-footer]';

module('Integration | Components.Banner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Pds::Banner>
        template block text
      </Pds::Banner>
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasClass('pds-banner')
      .hasClass('pds-banner--info', 'renders as "info" variant, by default')
      .hasText('template block text');

    assert.dom(HEADER).doesNotExist();
    assert.dom(BODY).doesNotExist();
    assert.dom(FOOTER).doesNotExist();
  });

  test('it renders contextual subcomponents', async function (assert) {
    await render(hbs`
      <Pds::Banner data-name="banner" as |B|>
        <B.Header data-name="header">
          header
        </B.Header>

        <B.Body data-name="body">
          body
        </B.Body>

        <B.Footer data-name="footer">
          footer
        </B.Footer>
      </Pds::Banner>
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasText('header body footer')
      .hasAttribute('data-name', 'banner', 'applies root ...attributes');

    assert
      .dom(HEADER)
      .exists()
      .hasText('header')
      .hasAttribute('data-name', 'header', 'applies header ...attributes')
      .hasClass('pds-banner__header');

    assert
      .dom(BODY)
      .exists()
      .hasText('body')
      .hasAttribute('data-name', 'body', 'applies body ...attributes')
      .hasClass('pds-banner__body');

    assert
      .dom(FOOTER)
      .exists()
      .hasText('footer')
      .hasAttribute('data-name', 'footer', 'applies footer ...attributes')
      .hasClass('pds-banner__footer');
  });
});
