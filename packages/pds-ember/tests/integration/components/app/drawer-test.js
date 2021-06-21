import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-app-drawer]';

module('Integration | Components.App.Drawer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Pds::App::Drawer data-foo="bar" />`);
    assert
      .dom(ROOT)
      .exists()
      .hasAttribute('data-foo', 'bar')
      .hasClass('pds-app__drawer')
      .hasNoText();

    // Template block usage:
    await render(hbs`
      <Pds::App::Drawer>
        template block text
      </Pds::App::Drawer>
    `);

    assert.dom(ROOT).hasText('template block text');
  });
});
