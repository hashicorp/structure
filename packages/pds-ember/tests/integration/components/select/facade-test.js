import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-root]';
const GRABBER = '[data-test-grabber]';
const GRABBER_ICON = '[data-test-grabber-icon]';

module('Integration | Components.Select.Facade', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Pds::Select::Facade
        id="foobar"
      />
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasClass('pds-selectFacade', 'has expected CSS class')
      .hasAttribute('id', 'foobar', 'passed through [id] attr');

    assert
      .dom(GRABBER)
      .exists()
      .hasClass('pds-selectFacade__grabber', 'has expected CSS class');

    assert.dom(GRABBER_ICON).exists();
  });

  test('it ignores block content', async function (assert) {
    await render(hbs`
      <Pds::Select::Facade>
        template block text
      </Pds::Select::Facade>
    `);

    assert.dom(ROOT).exists();
    assert.dom(GRABBER).exists();
    assert.dom(GRABBER_ICON).exists();
    assert.equal(this.element.textContent.trim(), '');
  });
});
