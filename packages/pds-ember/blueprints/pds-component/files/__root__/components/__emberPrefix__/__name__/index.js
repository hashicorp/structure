/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component'

/**
 * @class <%= jsClass %>
 */
export default class <%= jsClass %> extends Component {
<% if (!dummy) { %>
  /**
   * Is component awesome?
   *
   * @argument isAwesome
   * @type { boolean }
   * @default true
   */
  isAwesome = true
<% } %>
}
