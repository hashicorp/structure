/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

/**
 * @class DocsInput
 */

export default class extends Component {
  get type() {
    return this.args.type ?? 'text';
  }
}
