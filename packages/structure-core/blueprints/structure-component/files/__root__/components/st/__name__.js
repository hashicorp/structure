import Component from '@ember/component';
<%= importTemplate %>


/**
 *
 * `<%= classifiedModuleName %>` description here.
 *
 * ```js
 * <<%= classifiedModuleName %>
 *   @testArg={{foo}}
 * />
 * ```
 *
 * @class <%= classifiedModuleName %>
 *
 */
export default Component.extend({<%= contents %>

  /**
   * The description of `testArg` goes here. Any markdown you want!
   * @argument testArg
   * @type {string}
   */
  //testArg: null,
});
