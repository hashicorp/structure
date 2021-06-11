import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const ROOT = '[data-test-icon]'
const WRAPPER = '[data-test-icon-svg-wrapper]'

module('Integration | Components.Icon', function(hooks) {
  setupRenderingTest(hooks);

  // within test() callback:
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.set('myAction', function(val) { ... });

  test('should ignore block content', async function(assert) {
    await render(hbs`
      <Pds::Icon>
        block text
      </Pds::Icon>
    `);

    assert.equal(this.element.textContent.trim(), '');
  });

  module('without arguments', {
    beforeEach: async function() {
      await render(hbs`<Pds::Icon />`);
    },
  }, function() {
    test('should render the root element', async function(assert) {
      assert
        .dom(ROOT)
        .exists('renders root element')
        .doesNotHaveClass(/pds--.*/, 'does not have any unexpected classes')
    });

    test('should not render any svg elements', async function(assert) {
      assert
        .dom(`${WRAPPER} *`)
        .doesNotExist('does not render svg elements');
    });

    test('should not render text content', async function(assert) {
      assert.equal(this.element.textContent.trim(), '');
    });
  });

  test('should pass through a standard [id] attribute', async function(assert) {
    await render(hbs`<Pds::Icon id="foo" />`);

    assert
      .dom(ROOT)
      .hasAttribute('id', 'foo')
      .doesNotHaveAttribute('foo', 'bar');
  });

  test('should pass through a custom [foo-bar] attribute', async function(assert) {
    await render(hbs`<Pds::Icon foo-bar="fizzbuzz" />`);

    assert
      .dom(ROOT)
      .hasAttribute('foo-bar', 'fizzbuzz');
  });

  test('should support additional class names', async function(assert) {
    await render(hbs`<Pds::Icon class="foobar" />`);

    assert
      .dom(ROOT)
      .exists('renders root element with expected class')
      .hasClass('foobar');
  });

  module('@type="missing-icon-dne"', function() {
    test('should not render any svg elements', async function(assert) {
      await render(hbs`<Pds::Icon @type="missing-icon-dne" />`);

      assert
        .dom(`${WRAPPER} *`)
        .doesNotExist('does not render svg elements');
    });
  });

  module('@type="bolt"', {
    beforeEach: async function() {
      await render(hbs`<Pds::Icon @type="bolt" />`);
    },
  }, function () {
    test('should render an <svg> element', async function(assert) {
      assert
        .dom(`${ROOT} svg`)
        .exists({ count: 1 }, 'renders one <svg> element')
        .hasAria('hidden', 'true', 'aria-hidden exists on <svg>');
    });

    test('should render at least one <path>', async function(assert) {
      assert
        .dom(`${ROOT} svg path`)
        .exists('renders at least one <path> element');
    });
  });

  // Verifies that an icon can be loaded from local source files.
  //
  // What will happen if I try to use this type in a host app?
  //   - Nothing. The `svgJar.sourceDirs` config in `ember-cli-build.js` only
  //     applies to the dummy app and won't cascade to a host app.
  module('@type="test-icon" (dummy app icon)', {
    beforeEach: async function() {
      await render(hbs`<Pds::Icon @type="test-icon" />`);
    },
  }, function () {
    test('should render an <svg> element', async function(assert) {
      assert
        .dom(`${ROOT} svg`)
        .exists({ count: 1 }, 'renders one <svg> element')
        .hasAria('hidden', 'true', 'has svg[aria-hidden]');
    });

    test('should render at least one <path>', async function(assert) {
      assert
        .dom(`${ROOT} svg path`)
        .exists('renders at least one <path> element');
    });
  });
});
