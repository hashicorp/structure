import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Modifier | tooltip", function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test("it renders", async function (assert) {
    await render(hbs`<div {{tooltip}}></div>`);

    assert.ok(true);
  });
});


// const ROOT = '[data-test-copyright]'
// const LOGOMARK = '[data-test-copyright-logomark]'
// const TEXT = '[data-test-copyright-text]'

// module('Integration | Components.Copyright', function(hooks) {
//   setupRenderingTest(hooks)

//   test('it renders', async function(assert) {
//     await render(hbs`
//       <Pds::Copyright data-foo="bar">
//         template block text
//       </Pds::Copyright>
//     `)

//     assert
//       .dom(ROOT)
//       .exists()
//       .hasAttribute('data-foo', 'bar', 'applies ...attributes')
//       .hasClass('pds-copyright')

//     assert
//       .dom(ROOT)
//       .doesNotIncludeText('template block text', 'ignores template block')

//     assert
//       .dom(LOGOMARK)
//       .exists()
//       .isVisible()

//     assert
//       .dom(TEXT)
//       .hasText(/\d{4} HashiCorp/, 'renders expected copyright text')
//   })
// })
