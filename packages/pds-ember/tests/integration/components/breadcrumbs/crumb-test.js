import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-crumb]'
const DIVIDER = '[data-test-divider]'

module('Integration | Components.Breadcrumbs.Crumb', function(hooks) {
  setupRenderingTest(hooks);

  test('it should render inline', async function(assert) {
    await render(hbs`
      <Pds::Breadcrumbs::Crumb
        data-foo="bar"
      />
    `)
    await isRendered(assert)
    assert
      .dom(ROOT)
      .hasAttribute('data-foo', 'bar', 'passed [data-foo]')
      .hasNoText()
      .isNotVisible()
  })

  test('it should render block content', async function(assert) {
    await render(hbs`
      <Pds::Breadcrumbs::Crumb>
        block content
      </Pds::Breadcrumbs::Crumb>
    `)
    await isRendered(assert)

    assert
      .dom(ROOT)
      .hasText('block content /')
      .isVisible()

    assert
      .dom(DIVIDER)
      .exists()
      .isVisible()
  })
});

async function isRendered(assert) {
  assert
    .dom(ROOT)
    .exists('renders root element')
    .hasClass('pds-breadcrumbs__crumb')
}
