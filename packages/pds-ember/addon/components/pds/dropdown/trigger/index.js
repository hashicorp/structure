import Component from '@glimmer/component';
import { getVariantClass } from '../../button/utils';

/**
 * @class PdsDropdownTrigger
 */

/**
 * When true, reduces internal white space to compact element geometry.
 *
 * @argument compact
 * @type { boolean }
 * @default false
 */

/**
 * When true, visually hides block template content.
 *
 * @argument hideText
 * @type { boolean }
 * @default false
 */

/**
 * @argument icon
 * @type {string}
 * @default chevron-down
 */

/**
 * Display variant.
 *
 * If left blank or undefined, defaults to "secondary" button appearance.
 *
 * @argument variant
 * @type { string }
 * @default ''
 */
export default class PdsDropdownTrigger extends Component {
  get buttonClasses() {
    return 'pds-button';
  }

  get icon() {
    let { icon } = this.args;

    if (icon) {
      return icon;
    }

    return 'chevron-down';
  }

  // same as Button@variant
  get variantClass() {
    return getVariantClass(this.args.variant);
  }
}
