import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const SKIP_LINK = '[data-test-app-skip-link]';
const TOP_ANCHOR = '[data-test-app-top-anchor]';
const ROOT = '[data-test-app]';
const BANNER = '[data-test-app-banner]';
const BODY = '[data-test-app-body]';
const DRAWER = '[data-test-app-drawer]';
const FOOTER = '[data-test-app-footer]';
const HEADER = '[data-test-app-header]';
const MODAL_AREA = '[data-test-app-modal-area]';
const SIDEBAR = '[data-test-app-sidebar]';

module('Integration | Components.App', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Pds::App data-foo="bar" as |App|>
        <App.ModalArea>Modal Area</App.ModalArea>
        <App.Header>Header</App.Header>
        <App.Banner>Banner</App.Banner>
        <App.Sidebar>Sidebar</App.Sidebar>
        <App.Body>Body</App.Body>
        <App.Footer>Footer</App.Footer>
        <App.Drawer>Drawer</App.Drawer>
      </Pds::App>
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasClass('pds-app')
      .hasAttribute('data-foo', 'bar')
      .hasText('Modal Area Header Banner Sidebar Body Footer Drawer');

    assert.dom(SKIP_LINK).exists();
    assert.dom(TOP_ANCHOR).exists();
    assert.dom(MODAL_AREA).exists();
    assert.dom(HEADER).exists();
    assert.dom(BANNER).exists();
    assert.dom(SIDEBAR).exists();
    assert.dom(BODY).exists();
    assert.dom(FOOTER).exists();
    assert.dom(DRAWER).exists();
  });

  test('passes state to Drawer', async function (assert) {
    // Closed Drawer
    this.set('showDrawer', false);
    await render(hbs`
      <Pds::App @showDrawer={{showDrawer}} as |App|>
        <App.Drawer>Drawer</App.Drawer>
      </Pds::App>
    `);
    assert.dom(ROOT).doesNotHaveClass('has-open-drawer');
    assert.dom(DRAWER).hasAttribute('aria-expanded', 'false');

    // Open Drawer
    this.set('showDrawer', true);
    await settled();
    assert.dom(ROOT).hasClass('has-open-drawer');
    assert.dom(DRAWER).hasAttribute('aria-expanded', 'true');
  });
});
