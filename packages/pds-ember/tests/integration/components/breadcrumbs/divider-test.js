import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-divider]'

module('Integration | Components.Breadcrumbs.Crumb', function(hooks) {
  setupRenderingTest(hooks);

  test('it should render inline', async function(assert) {
    await render(hbs`
      <Pds::Breadcrumbs::Divider
        data-foo="bar"
      />
    `)
    await isRendered(assert)
    assert
      .dom(ROOT)
      .hasAttribute('data-foo', 'bar')
      .hasText('/')
  })

  test('it should NOT render block content', async function(assert) {
    await render(hbs`
      <Pds::Breadcrumbs::Divider>
        yadda yadda yadda
      </Pds::Breadcrumbs::Divider>
    `)
    await isRendered(assert)
    assert
      .dom(ROOT)
      .hasText('/')
  })
});

async function isRendered(assert) {
  assert
    .dom(ROOT)
    .exists('renders root element')
    .hasClass('pds-breadcrumbs__divider')
    .hasAttribute('aria-hidden', 'true')
    .isVisible()
}
