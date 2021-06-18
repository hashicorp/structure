import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-page-header]';
const ACTIONS = '[data-test-page-header-actions]';
const BREADCRUMBS = '[data-test-page-header-breadcrumbs]';
const TITLE = '[data-test-page-header-title]';
const TABS = '[data-test-page-header-tabs]';

module('Integration | Components.PageHeader', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Pds::PageHeader
        data-foo="bar"
        @variant={{this.variant}}
        as |H|
      >
        <H.Actions data-name="actions">
          actions
        </H.Actions>

        <H.Breadcrumbs data-name="breadcrumbs">
          breadcrumbs
        </H.Breadcrumbs>

        <H.Title data-name="title">
          title
        </H.Title>

        <H.Tabs data-name="tabs">
          tabs
        </H.Tabs>
      </Pds::PageHeader>
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasText('actions breadcrumbs title tabs')
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-pageHeader')
      .doesNotHaveClass('pds--filled', 'does not have filled variant class');

    assert
      .dom(ACTIONS)
      .exists()
      .hasText('actions')
      .hasAttribute('data-name', 'actions', 'applies Actions ...attributes');

    assert
      .dom(BREADCRUMBS)
      .exists()
      .hasText('breadcrumbs')
      .hasAttribute(
        'data-name',
        'breadcrumbs',
        'applies Breadcrumbs ...attributes'
      );

    assert
      .dom(TABS)
      .exists()
      .hasText('tabs')
      .hasAttribute('data-name', 'tabs', 'applies Tabs ...attributes');

    assert
      .dom(TITLE)
      .exists()
      .hasText('title')
      .hasAttribute('data-name', 'title', 'applies Title ...attributes');

    this.set('variant', 'filled');
    assert.dom(ROOT).hasClass('pds--filled', 'has filled variant class');
  });
});
