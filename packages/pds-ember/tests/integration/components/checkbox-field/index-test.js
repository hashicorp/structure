import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, settled } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-checkbox-field]'
const INPUT = '[data-test-checkbox-field-input]'
const LABEL = '[data-test-checkbox-field-label]'

module('Integration | Components.CheckboxField', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::CheckboxField
        data-foo="bar"
      />
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasClass('pds-checkboxField')

    assert
      .dom(INPUT)
      .exists()
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')

    // Template block usage:
    await render(hbs`
      <Pds::CheckboxField>
        template block text
      </Pds::CheckboxField>
    `)

    assert
      .dom(ROOT)
      .hasText('template block text')
  })

  test('it yields an auto-generated id', async function(assert) {
    await render(hbs`
      <Pds::CheckboxField as |f|>
        {{f.id}}
      </Pds::CheckboxField>
    `)

    assert
      .dom(ROOT)
      .hasText(/chk-ember\d+/, 'yields generated id')
  })

  test('it favors @id over auto-generated id', async function(assert) {
    let expectedID = 'foobar'

    this.set('id', expectedID)
    await render(hbs`
      <Pds::CheckboxField @id={{this.id}} as |f|>
        {{f.id}}
      </Pds::CheckboxField>
    `)

    // yields the overridden id
    assert.dom(ROOT).hasText(expectedID)

    // applies input[id]
    assert.dom(INPUT).hasAttribute('id', expectedID)

    // applies label[for]
    assert.dom(LABEL).hasAttribute('for', expectedID)
  })

  test('it supports @invalid', async function(assert) {
    this.set('invalid', false)
    await render(hbs`
      <Pds::CheckboxField
        @invalid={{this.invalid}}
      />
    `)
    assert
      .dom(INPUT)
      .doesNotHaveClass('pds--invalid', 'does not appear "invalid"')

    this.set('invalid', true)
    await settled()
    assert
      .dom(INPUT)
      .hasClass('pds--invalid', 'does not appear "invalid"')
  })
})

