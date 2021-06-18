import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-app-sidebar]';

module('Integration | Components.App.Sidebar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Pds::App::Sidebar data-foo="bar" />`);
    assert
      .dom(ROOT)
      .exists()
      .hasAttribute('data-foo', 'bar')
      .hasClass('pds-app__sidebar')
      .hasNoText();

    // Template block usage:
    await render(hbs`
      <Pds::App::Sidebar>
        template block text
      </Pds::App::Sidebar>
    `);

    assert.dom(ROOT).hasText('template block text');
  });
});
