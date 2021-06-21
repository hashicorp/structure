import Component from '@glimmer/component';

const DEFAULT_ICON = 'alert-circle-outline';

/**
 * @class PdsErrorState
 */

/**
 * Title text for communicated error.
 *
 * @argument title
 * @type {string}
 */

/**
 * Subtitle text for communicated error.
 *
 * @argument subtitle
 * @type {string}
 */
export default class PdsErrorState extends Component {
  /**
   * Icon to display next to title/subtitle.
   *
   * @argument icon
   * @type {string}
   * @default alert-circle-outline
   */
  get icon() {
    let { icon } = this.args;
    return icon ? icon : DEFAULT_ICON;
  }
}
