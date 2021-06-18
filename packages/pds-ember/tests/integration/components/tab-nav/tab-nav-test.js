import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-tab-nav]';

module('Integration | Components.TabNav', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Pds::TabNav
        data-foo="bar"
      />
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-tabNav');

    // Template block usage:
    await render(hbs`
      <Pds::TabNav>
        template block text
      </Pds::TabNav>
    `);

    assert.dom(ROOT).hasText('template block text');
  });
});
