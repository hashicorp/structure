import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-checkbox-facade]';
const TICK = '[data-test-checkbox-facade-tick]';

module('Integration | Components.CheckboxField.Facade', function (hooks) {
  setupRenderingTest(hooks);

  test('it does not render block content', async function (assert) {
    await render(hbs`
      <Pds::CheckboxField::Facade>
        template block text
      </Pds::CheckboxField::Facade>
    `);

    assert.dom(ROOT).hasNoText();
  });

  test('it renders inline', async function (assert) {
    await render(hbs`
      <Pds::CheckboxField::Facade
        data-foo="bar"
      />
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-checkboxFacade');

    assert.dom(TICK).exists().hasStyle({ visibility: 'hidden' });
  });
});
