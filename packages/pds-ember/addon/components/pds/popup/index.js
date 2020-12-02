import Component from '@glimmer/component'
import { action } from '@ember/object'
import { ICON_TYPES, DEFAULT_VARIANT } from './utils'

const NOOP = () => {}

/**
 * @class PdsPopup
 */
export default class PdsPopup extends Component {
  /**
   * @type String
   */
  get iconType() {
    return ICON_TYPES[this.variant]
  }

  /**
   * Custom callback to run when user clicks "X" to close.
   * @argument onClose
   * @type {function}
   */
  get onClose() {
    let { onClose } = this.args

    if (typeof onClose === 'function') {
      return onClose
    } else {
      return NOOP
    }
  }

  /**
   * Valid values:
   *
   *   - `error`
   *   - `info`
   *   - `success`
   *   - `warning`
   *
   * @argument variant
   * @type {string}
   * @default 'info'
   */
  get variant() {
    return this.args.variant || DEFAULT_VARIANT
  }

  // ===== ACTIONS ===== //

  @action
  _handleClose() {
    this.onClose()
  }
}
