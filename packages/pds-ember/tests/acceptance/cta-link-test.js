import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

const ENABLED = '[data-test-cta-enabled]'
const DISABLED = '[data-test-cta-disabled]'

module('Acceptance | Components.CtaLink', function(hooks) {
  setupApplicationTest(hooks);

  // See tests/dummy/app/templates/test/cta-link.hbs
  test('visiting /components/cta-link', async function(assert) {
    await visit('/components/cta-link');
    assert.equal(currentURL(), '/components/cta-link');

    await renders(assert, ENABLED)
    assert
      .dom(ENABLED)
      .hasText('Enabled CTA')
      .doesNotHaveClass('pds--disabled')
      .doesNotHaveClass('pds--current')
      .hasAttribute('data-foo', 'bar')

    await renders(assert, DISABLED)
    assert
      .dom(DISABLED)
      .hasText('Disabled CTA')
      .hasClass('pds--disabled')
      .doesNotHaveClass('pds--current')
  });
});

async function renders(assert, selector) {
  assert
    .dom(selector)
    .exists()
    .hasTagName('a')
    .hasClass('pds--cta')
    .doesNotHaveStyle({ cursor: 'auto' }, 'has custom style')
    .hasAttribute('href', /.*/, 'is a hyperlink')
}
