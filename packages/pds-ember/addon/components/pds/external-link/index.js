import Component from '@glimmer/component';

/**
 * @class PdsExternalLink
 */

/**
 * Controls visibility of the trailing icon.
 *
 * @argument hideIcon
 * @type {?boolean}
 * @default false
 */

/**
 *
 * Renders an icon to the right of the block content.
 * @argument iconEnd
 * @type {?string}
 * @default 'exit'
 */

/**
 * Renders an icon to the left of the block content.
 * @argument iconStart
 * @type {?string}
 * @default ''
 */
export default class PdsExternalLink extends Component {
  get iconEnd() {
    return this.args.iconEnd || 'exit'
  }
}
