import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-nav]';

module('Integration | Components.Nav', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value')
    // Handle any actions with this.set('myAction', function(val) { ... })

    await render(hbs`
      <Pds::Nav
        data-foo="bar"
      />
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-nav')
      .hasTagName('nav');

    // Template block usage:
    await render(hbs`
      <Pds::Nav>
        template block text
      </Pds::Nav>
    `);

    assert.dom(ROOT).hasText('template block text');
  });
});
