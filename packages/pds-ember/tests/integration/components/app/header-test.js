import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-app-header]';

module('Integration | Components.App.Header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Pds::App::Header data-foo="bar" />`);
    assert
      .dom(ROOT)
      .exists()
      .hasAttribute('data-foo', 'bar')
      .hasClass('pds-app__header')
      .hasNoText()
      .hasTagName('header');

    // Template block usage:
    await render(hbs`
      <Pds::App::Header>
        template block text
      </Pds::App::Header>
    `);

    assert.dom(ROOT).hasText('template block text');
  });
});
