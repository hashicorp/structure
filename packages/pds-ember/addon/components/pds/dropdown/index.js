import Component from '@glimmer/component'
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'

const NOOP = () => {}

/**
 * @class PdsDropdown
 *
 * @yield {PdsDropdownTrigger} Trigger
 * @yield {PdsDropdownDialog} Dialog
 * @yield {boolean} isOpen
 * @yield {function} close
 */

/**
 * When true, adds the `[open]` attribute to the rendered `<details>` element.
 *
 * **NOTE:** Auto-close behavior does not work while `@isOpen` is truthy.
 *
 * @argument isOpen
 * @type {boolean}
 */

/**
 * Optional function called when the `isOpen` value is set.
 *
 * It is passed the `isOpen` value as the only argument.
 *
 * @argument onToggle
 * @type {function(isOpen)}
 */

/**
 * Adjust inline alignment of Dialog in relation to the Trigger.
 *
 * @argument align
 * @type {string}
 * @default 'left'
 */
export default class PdsDropdown extends Component {
  _handleDocumentClick = NOOP

  @tracked
  _isOpen = false

  get isOpen() {
    return this.args.isOpen || this._isOpen
  }
  set isOpen(val) {
    this._isOpen = val
    this.onToggle(val)
  }

  get alignmentClass() {
    let { align } = this.args
    if (align) {
      return `pds--align-${align}`
    }
    return 'pds--align-left'
  }

  @action
  close() {
    this.isOpen = false
  }

  // @type {function}
  get onToggle() {
    let { onToggle } = this.args

    if (typeof onToggle === 'function') {
      return onToggle
    } else {
      return NOOP
    }
  }

  // handler for <details> 'toggle' event
  @action
  handleToggle(evt) {
    this.isOpen = evt.target.open
  }

  @action
  didInsert(el) {
    // memoize handler for later removal
    this._handleDocumentClick = (evt) => {
      if (!el.contains(evt.target)) {
        this.isOpen = false
      }
    }

    document.addEventListener('click', this._handleDocumentClick, true)
  }

  @action
  willDestroy(el) {
    document.removeEventListener('click', this._handleDocumentClick, true)
  }
}
