import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-button-set]';

module('Integration | Components.ButtonSet', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Pds::ButtonSet
        data-foo="bar"
      />
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-buttonSet');

    // Template block usage:
    await render(hbs`
      <Pds::ButtonSet>
        template block text
      </Pds::ButtonSet>
    `);

    assert.dom(ROOT).hasText('template block text');
  });
});
