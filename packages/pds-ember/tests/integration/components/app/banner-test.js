import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-app-banner]';

module('Integration | Components.App.Banner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Pds::App::Banner data-foo="bar" />`);
    assert
      .dom(ROOT)
      .exists()
      .hasAttribute('data-foo', 'bar')
      .hasClass('pds-app__banner')
      .hasNoText();

    // Template block usage:
    await render(hbs`
      <Pds::App::Banner>
        template block text
      </Pds::App::Banner>
    `);

    assert.dom(ROOT).hasText('template block text');
  });
});
