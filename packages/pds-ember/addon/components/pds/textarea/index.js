import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

/**
 * @class PdsTextarea
 */

/**
 * if true, applies an "invalid" appearance
 *
 * **NOTE:**
 * This does _not_ modify logical validity (i.e., `:valid` or `:invalid`).
 *
 * @argument invalid
 * @type {Boolean}
 * @default false
 */
export default class extends Component {
  @tracked dirty = false;
  @tracked touched = false;

  @action
  onBlur() {
    this.dirty = true;
    this.touched = true;
  }
}
