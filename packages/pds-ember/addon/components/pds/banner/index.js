import Component from '@glimmer/component'
import { ICON_TYPES, DEFAULT_VARIANT } from './utils'

/**
 * @class PdsBanner
 */
export default class PdsBanner extends Component {
  /**
   * changes the visual appearance
   *
   * Valid values include:
   *
   *   - `error`
   *   - `info`
   *   - `info-no-border`
   *   - `success`
   *   - `warning`
   *   - `warning-no-border`
   *
   * @argument variant
   * @type {string}
   * @default 'info'
   */
  get variant() {
    return this.args.variant || DEFAULT_VARIANT
  }

  get iconType() {
    return ICON_TYPES[this.variant]
  }
}
