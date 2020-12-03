import Component from '@glimmer/component'
import { action } from '@ember/object'
import { guidFor } from '@ember/object/internals'
import { DEFAULT_VARIANT, ICON_TYPES } from './utils'

const NOOP = () => {}

/**
 * @class PdsModal
 */

/**
 * Modal title
 *
 * @argument title
 * @type {string}
 */
export default class PdsModal extends Component {
  /**
   * Valid values include:
   *
   *   - (blank) or "plain"
   *   - "error"
   *   - "info"
   *   - "success"
   *   - "warning"
   *
   * @argument variant
   * @type {string}
   */
  get variant() {
    return this.args.variant || DEFAULT_VARIANT
  }

  /**
   * If left unset, icon will be applied based on the configured variant.
   *
   * @argument icon
   * @type {string}
   */
  get iconType() {
    let { icon } = this.args
    let result = icon ? icon : ICON_TYPES[this.variant]
    return result
  }

  /**
   * Callback run when user closes the modal.
   *
   * Defaults to a noop function.
   *
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

  get titleId() {
    return `modal-title-${guidFor(this)}`
  }

  @action
  close() {
    this.onClose()
  }

  @action
  _handleKeyup(evt) {
    if (evt.key === 'Escape') {
      this.close()
    }
  }
}
