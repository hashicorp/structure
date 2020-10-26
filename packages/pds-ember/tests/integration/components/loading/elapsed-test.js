import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import sinon from 'sinon'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

const ROOT = '[data-test-loading-elapsed]'

module('Integration | Components.Loading.Elapsed', function(hooks) {
  setupRenderingTest(hooks)

  hooks.beforeEach(function() {
    this.clock = sinon.useFakeTimers({
      now: Date.now(),
      shouldAdvanceTime: true,
    })
  })

  hooks.afterEach(function() {
    this.clock.restore()
  })

  test('it renders', async function(assert) {
    await render(hbs`
      <Pds::Loading::Elapsed
        data-foo="bar"
      />
    `)

    assert
      .dom(ROOT)
      .exists()
      .containsText('Time Elapsed: --:--')
      .hasClass('pds-loading__elapsed')
      .hasAttribute('data-foo', 'bar')

    // advance 1 second
    this.clock.tick(1000)
    assert
      .dom(ROOT)
      .containsText('Time Elapsed: 00:01')

    // advance 59 seconds
    this.clock.tick(59 * 1000)

    assert
      .dom(ROOT)
      .containsText('Time Elapsed: 01:00')

    // advance 59 minutes
    this.clock.tick(59 * 60 * 1000)

    assert
      .dom(ROOT)
      .containsText('Time Elapsed: 01:00:00')
  })

  test('it renders: @startTime', async function(assert) {
    let thirtyMinutesAgo = new Date().getTime() - (1000 * 60 * 30)
    this.set('startTime', thirtyMinutesAgo)

    await render(hbs`
      <Pds::Loading::Elapsed
        @startTime={{startTime}}
      />
    `)

    // advance 1 second
    this.clock.tick(1000)

    assert
      .dom(ROOT)
      .containsText('Time Elapsed: 30:01')
  })
})
