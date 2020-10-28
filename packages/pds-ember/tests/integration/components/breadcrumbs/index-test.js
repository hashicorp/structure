import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-root]'
const CRUMB = '[data-test-crumb]'
const DIVIDER = '[data-test-divider]'

module('Integration | Components.Breadcrumbs', function(hooks) {
  setupRenderingTest(hooks);

  test('it should render inline', async function(assert) {
    await render(hbs`
      <Pds::Breadcrumbs
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
      <Pds::Breadcrumbs as |B|>
        <B.Divider />
        <B.Crumb>
          block content
        </B.Crumb>
      </Pds::Breadcrumbs>
    `)
    await isRendered(assert)
    assert
      .dom(ROOT)
      .isVisible()
      .hasText('/ block content /')

    assert
      .dom(DIVIDER)
      .exists({ count: 2 })

    assert
      .dom(CRUMB)
      .exists({ count: 1 })
  })

  test('it should hide divider rendered by :last-child crumb', async function(assert) {
    // Crumb is first child
    await render(hbs`
      <Pds::Breadcrumbs as |B|>
        <B.Crumb id="crumb">crumb</B.Crumb>
        <B.Divider id="divider" />
      </Pds::Breadcrumbs>
    `)
    assert.dom(`#crumb ${DIVIDER}`).isVisible()
    assert.dom('#divider').isVisible()

    // Crumb is last child
    await render(hbs`
      <Pds::Breadcrumbs as |B|>
        <B.Divider id="divider" />
        <B.Crumb id="crumb">crumb</B.Crumb>
      </Pds::Breadcrumbs>
    `)
    assert.dom('#divider').isVisible()
    assert.dom(`#crumb ${DIVIDER}`).isNotVisible()
  })
});

async function isRendered(assert) {
  assert
    .dom(ROOT)
    .exists('renders root element')
    .hasClass('pds-breadcrumbs')
    .hasTagName('nav')
    .hasAttribute('role', 'navigation')
}
