import Component from '@glimmer/component'

/**
 * @class PdsPageHeader
 */

/**
 * Valid values:
 *
 *   - undefined (a.k.a., "plain")
 *   - `filled`
 *
 * @argument variant
 * @type {string}
 */
export default class PdsPageHeader extends Component {
  get variantClass() {
    let { variant } = this.args
    if (variant) {
      return `pds--${variant}`
    }
    return ''
  }
}
