import Component from '@glimmer/component';
import { getVariantClass } from './utils';

/**
 * @class PdsButton
 */

/**
 * When true, reduces internal white space to compact button geometry.
 *
 * @argument compact
 * @type { boolean }
 * @default false
 */

/**
 * When true, visually hides block template content.
 *
 * _(default: `false`)_
 *
 * This is useful when defining icon-only buttons but want to use block
 * content to define the accessible button name.
 *
 * @argument hideText
 * @type { boolean }
 * @default false
 */

/**
 * `@type` argument for the second of two [FlightIcon](https://flight-hashicorp.vercel.app/)
 * components (rendered after block content).
 *
 * _(default: `''`)_
 *
 * Icon will not render, if falsey.
 *
 * @argument iconEnd
 * @type { string }
 * @default ''
 */

/**
 * `@type` argument for the first of two [FlightIcon](https://flight-hashicorp.vercel.app/)
 * components (rendered before block content).
 *
 * _(default: `''`)_
 *
 * Icon will not render, if falsey.
 *
 * @argument iconStart
 * @type { string }
 * @default ''
 */

/**
 * a valid `[type]` attribute value for a
 * [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
 * element
 *
 * _(default: `'button'`)_
 *
 * **NOTE:**
 * Due to a [bug in Ember](https://github.com/emberjs/ember.js/issues/18232),
 * you _must_ use the `@type` argument instead of the `[type]` attribute for the
 * generated `<button>` element to be configured correctly.
 *
 * @argument type
 * @type { string }
 * @default 'button'
 */

/**
 * Display variant.
 *
 * _(default: `''`)_
 *
 * If left blank or not defined, defaults to "secondary" button appearance.
 *
 * Valid values include:
 *
 * - `ghost`
 * - `primary`
 * - `warning`
 *
 * @argument variant
 * @type { string }
 * @default ''
 */

export default class extends Component {
  get type() {
    let { type } = this.args;
    return type ? type : 'button';
  }

  get variantClass() {
    return getVariantClass(this.args.variant);
  }
}
