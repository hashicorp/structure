/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

/**
 * @class PdsRadioField
 *
 * @yield {Hash} field
 * @yield {string} field.id auto-generated ID applied to rendered `input[id]`
 * and `label[for]`
 */

/**
 * Optional value to apply to `input[id]` and `label[for]` attributes in
 * generated markup.  If not provided, an auto-generated guid will be applied.
 *
 * **NOTE:**
 * This argument must be used if you want to apply a specific `input[id]` value.
 *
 * @argument id
 * @type {string}
 */

/**
 * if true, applies an "invalid" appearance
 *
 * **NOTE:**
 * This does _not_ modify logical validity (i.e., `:valid` or `:invalid`).
 *
 * @argument invalid
 * @type {boolean}
 * @default false
 */
export default class PdsRadioField extends Component {
  get id() {
    // use @id arg, if provided
    if (this.args.id) {
      return this.args.id;
    }

    // otherwise, generate and memoize a guid
    if (!this._id) {
      let guid = guidFor(this);
      // eslint-disable-next-line ember/no-side-effects
      this._id = `rad-${guid}`;
    }
    return this._id;
  }
}
