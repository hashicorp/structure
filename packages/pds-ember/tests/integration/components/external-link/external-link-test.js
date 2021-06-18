import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-external-link]';
const ICON = '[data-test-external-link-icon]';

module('Integration | Components.ExternalLink', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders inline', async function (assert) {
    await render(hbs`
      <Pds::ExternalLink
        data-foo="bar"
      />
    `);

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds--external')
      .hasTagName('a');
  });

  test('it renders with block', async function (assert) {
    await render(hbs`
      <Pds::ExternalLink>
        template block text
      </Pds::ExternalLink>
    `);
    assert.dom(ROOT).hasText('template block text');
  });

  test('it supports @hideIcon argument', async function (assert) {
    await render(hbs`
      <Pds::ExternalLink
        @hideIcon={{hideIcon}}
      />
    `);
    assert.dom(ICON).exists().isVisible();

    this.set('hideIcon', true);
    await settled();
    assert.dom(ICON).doesNotExist().isNotVisible();
  });

  test('it renders icon at start', async function (assert) {
    await render(hbs`
      <Pds::ExternalLink @iconStart="docs">
        <span data-test-my-link>My Link</span>
      </Pds::ExternalLink>
    `);

    assert
      .dom(`${ROOT} >:first-child`)
      .exists()
      .hasAttribute('data-test-external-link-icon');

    assert
      .dom(`${ROOT} >:last-child`)
      .exists()
      .hasAttribute('data-test-my-link');
  });

  test('it renders icon at end', async function (assert) {
    await render(hbs`
      <Pds::ExternalLink @iconEnd="docs">
        <span data-test-my-link>My Link</span>
      </Pds::ExternalLink>
    `);

    assert
      .dom(`${ROOT} >:last-child`)
      .exists()
      .hasAttribute('data-test-external-link-icon');

    assert
      .dom(`${ROOT} >:first-child`)
      .exists()
      .hasAttribute('data-test-my-link');
  });
});
