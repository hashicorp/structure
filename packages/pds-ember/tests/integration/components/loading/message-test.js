import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-loading-message]';

module('Integration | Components.Loading.Message', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Pds::Loading::Message
        data-foo="bar"
      >
        Message Content
      </Pds::Loading::Message>
    `);

    assert
      .dom(ROOT)
      .exists()
      .containsText('Message Content')
      .hasClass('pds-loading__message')
      .hasAttribute('data-foo', 'bar');
  });
});
