import Component from '@ember/component';
<%= importTemplate %>


/**
 *
 * `<%= angleBracketInvocation %>` description here.
 *
 * ```js
 * <<%= angleBracketInvocation %>
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
