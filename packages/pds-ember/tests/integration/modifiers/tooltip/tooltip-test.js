import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, focus } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | tooltip', function (hooks) {
  setupRenderingTest(hooks);

  test('basic usage', async function (assert) {
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
});
