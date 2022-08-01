import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, focus, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | tooltip', function (hooks) {
  setupRenderingTest(hooks);

  test.skip('basic usage', async function (assert) {
    await render(hbs`
      <div
        data-test-target
        {{tooltip "Tooltip content"}}
      >
        Tooltip target
      </div>
    `);
    await focus('[data-test-target]');

    assert.dom('.tippy-box', document.body).includesText('Tooltip content');
    assert
      .dom('.tippy-box', document.body)
      .hasAttribute('data-theme', 'structure');
  });

  test('with options', async function (assert) {
    await render(hbs`
      <div
        data-test-target
        {{tooltip "Tooltip content" options=(hash placement="bottom")}}
      >
        Tooltip target
      </div>
    `);
    await focus('[data-test-target]');

    assert
      .dom('.tippy-box', document.body)
      .hasAttribute('data-placement', 'bottom');
  });

  test('does not tear down when content is updated', async function (assert) {
    let firstContent = 'Tooltip content';
    this.set('content', firstContent);
    await render(hbs`
      <div
        data-test-target
        {{tooltip this.content options=(hash placement="bottom")}}
      >
        Tooltip target
      </div>
    `);
    await focus('[data-test-target]');

    assert
      .dom('.tippy-box', document.body)
      .hasAttribute('data-placement', 'bottom');
    assert.dom('.tippy-content', document.body).hasText(firstContent);

    let newContent = 'Tooltip content new';
    this.set('content', newContent);
    await settled();

    // Check that content has updated without having to refocus the tooltip
    assert
      .dom('.tippy-box', document.body)
      .hasAttribute('data-placement', 'bottom');
    assert.dom('.tippy-content', document.body).hasText(newContent);
  });
});
