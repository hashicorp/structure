import Component from '@ember/component';
import layout from '../../templates/components/st/test';



/**
 *
 * `StTest` description here.
 *
 * ```js
 * <St::Test
 *   @testArg={{foo}}
 * />
 * ```
 *
 * @class StTest
 *
 */
export default Component.extend({
  layout,
  tagName: '',

  /**
   * The description of `testArg` goes here. Any markdown you want!
   * @argument testArg
   * @type {string}
   */
  //testArg: null,
});
