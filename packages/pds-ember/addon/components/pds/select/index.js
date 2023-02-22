/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import { normalizeOptions } from './utils';

/**
 * @class PdsSelect
 */

/**
 * if true, applies an "invalid" appearance
 *
 * **NOTE:**
 * This does _not_ modify logical validity (i.e., `:valid` or `:invalid`).
 *
 * _default: `false`_
 *
 * @argument invalid
 * @type { boolean }
 */

/**
 * List of options
 *
 * (**inline ONLY**)
 *
 * _default: `[]`_
 *
 *
 * @argument options
 * @type { array }
 */

/**
 * Used to determine which `<option>` is `[selected]`.
 *
 * (**inline ONLY**)
 *
 * _default: `null`_
 *
 *
 * @argument value
 * @type { any }
 */

export default class extends Component {
  @tracked dirty = false;
  @tracked touched = false;

  get options() {
    return normalizeOptions(this.args);
  }

  @action
  onBlur() {
    this.dirty = true;
    this.touched = true;
  }
}
