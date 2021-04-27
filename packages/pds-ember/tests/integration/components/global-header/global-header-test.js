import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-global-header]';
const LOGO = '.pds-globalHeader__logo';
const PRIMARY_NAV = '.pds-globalHeader__primaryNav';
const SECONDARY_NAV = '.pds-globalHeader__secondaryNav';
const SWITCHER = '.pds-globalHeader__switcher';
const USER_MENU = '.pds-globalHeader__userMenu';

module('Integration | Components.GlobalHeader', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders contextual subcomponents', async function (assert) {
    await render(hbs`
      <Pds::GlobalHeader>
        <:logo></:logo>
        <:switcher></:switcher>
        <:primary-nav></:primary-nav>
        <:secondary-nav></:secondary-nav>
        <:user-menu></:user-menu>
      </Pds::GlobalHeader>
    `);

    assert.dom(ROOT).hasNoText();

    assert.dom(LOGO).exists();

    assert.dom(PRIMARY_NAV).exists().hasClass('pds-globalHeader__nav');

    assert.dom(SECONDARY_NAV).exists().hasClass('pds-globalHeader__nav');

    assert.dom(SWITCHER).exists();

    assert.dom(USER_MENU).exists();
  });
});
