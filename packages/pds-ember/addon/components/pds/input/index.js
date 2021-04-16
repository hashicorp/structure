import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import { getValidType, isTextLike, cssClassForType } from './utils';

/**
 * @class PdsInput
 */

/**
 * a valid `[type]` attribute value for an
 * [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types)
 * element
 *
 * _(default: `text`)_
 *
 * **NOTE:**
 * Due to a [bug in Ember](https://github.com/emberjs/ember.js/issues/18232),
 * you _must_ use the `@type` argument instead of the `[type]` attribute for the
 * generated `<input />` element to be configured correctly.
 *
 * @argument type
 * @type { string }
 */

/**
 * if true, applies an "invalid" appearance
 *
 * _(default: false)_
 *
 * **NOTE:**
 * This does _not_ modify logical validity (i.e., `:valid` or `:invalid`).
 *
 * @argument invalid
 * @type { boolean }
 */

export default class extends Component {
  @tracked dirty = false;
  @tracked touched = false;

  get type() {
    return getValidType(this.args.type);
  }

  get isTextLike() {
    return isTextLike(this.type);
  }

  get classNames() {
    let _names = [
      'pds-input',
      cssClassForType(this.type),
      this.args.invalid ? 'pds--invalid' : '',
    ];

    return _names.join(' ').trim();
  }

  @action
  onBlur() {
    this.dirty = true;
    this.touched = true;
  }
}
