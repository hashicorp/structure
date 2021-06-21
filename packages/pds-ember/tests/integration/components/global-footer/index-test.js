import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-global-footer]';
const COPYRIGHT = '[data-test-global-footer-copyright]';
const PRODUCT_NAME = '[data-test-global-footer-product-name]';
const NAV = '[data-test-global-footer-nav]';

module('Integration | Components.GlobalFooter', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders inline', async function (assert) {
    await render(hbs`
      <Pds::GlobalFooter />
    `);

    assert.dom(ROOT).exists().hasClass('pds-globalFooter');

    assert.dom(COPYRIGHT).exists();

    assert.dom(PRODUCT_NAME).doesNotExist();

    assert.dom(NAV).doesNotExist();
  });

  test('it renders contextual subcomponents', async function (assert) {
    await render(hbs`
      <Pds::GlobalFooter
        data-name="global-footer"
        as |F|
      >
        <F.ProductName data-name="product-name">
          product name
        </F.ProductName>

        <F.Nav data-name="nav">
          nav
        </F.Nav>
      </Pds::GlobalFooter>
    `);

    assert
      .dom(ROOT)
      .hasAttribute('data-name', 'global-footer', 'applies root ...attributes');

    assert.dom(COPYRIGHT).exists();

    assert
      .dom(PRODUCT_NAME)
      .exists()
      .hasClass('pds-globalFooter__productName')
      .hasAttribute(
        'data-name',
        'product-name',
        'applies ProductName ...attributes'
      )
      .hasText('product name');

    assert
      .dom(NAV)
      .exists()
      .hasClass('pds-globalFooter__nav')
      .hasAttribute('data-name', 'nav', 'applies Nav ...attributes')
      .hasText('nav');
  });
});
