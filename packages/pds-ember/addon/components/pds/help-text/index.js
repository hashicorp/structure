/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { getVariantClass } from './utils';

/**
 * @class HelpText
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
 * - `bold`
 *
 * @argument variant
 * @type { string }
 * @default ''
 */

export default class extends Component {
  get variantClass() {
    return getVariantClass(this.args.variant);
  }
}
