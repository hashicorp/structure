/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-root]'

module('Integration | Components.<%= classifiedModuleName %>', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value')
    // Handle any actions with this.set('myAction', function(val) { ... })

    await render(hbs`
      <<%= tagName %>
        data-foo="bar"
      />
    `)

    assert
      .dom(ROOT)
      .exists()
      .hasNoText()
      .hasAttribute('data-foo', 'bar', 'applies ...attributes')
      .hasClass('<%= cssClassName %>')

    // Template block usage:
    await render(hbs`
      <<%= tagName %>>
        template block text
      </<%= tagName %>>
    `)

    assert
      .dom(ROOT)
      .hasText('template block text')

    // Remove next line and update tests
    assert.ok(false, 'write additional tests')
  })
})

