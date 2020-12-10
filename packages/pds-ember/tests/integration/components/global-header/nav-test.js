import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-global-header-nav]'

module('Integration | Components.GlobalHeader.Nav', function(hooks) {
  setupRenderingTest(hooks)

  let custom_class = 'custom-class'

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::GlobalHeader::Nav
        data-foo="bar"
        @attr-class={{this.attrClass}}
      >
        template block text
      </Pds::GlobalHeader::Nav>
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasText('template block text')
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('pds-globalHeader__nav')
      .doesNotHaveClass(custom_class, 'does not apply @attr-class')
  })

  // used for defining extra class names when yielding an aliased contextual component
  // {{ yield (hash FooNav=(component 'pds/global-header/nav' attr-class='custom-class-name') ) }}
  test('it supports @attr-class', async function(assert) {
    await render(hbs`
      <Pds::GlobalHeader::Nav @attr-class={{this.attrClass}} />
    `)
    assert
      .dom(ROOT)
      .doesNotHaveClass(custom_class, 'does not apply @attr-class')

    this.set('attrClass', custom_class)
    assert
      .dom(ROOT)
      .hasClass(custom_class, 'applies @attr-class')
  })
})

