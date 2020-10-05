import Component from '@glimmer/component';
/**
 * @class <%= jsClass %>
 */
export default class extends Component {
<% if (!dummy) { %>
  /**
   * Is component awesome?
   *
   * @argument isAwesome
   * @type { boolean }
   */
  isAwesome = true;
<% } %>
}
