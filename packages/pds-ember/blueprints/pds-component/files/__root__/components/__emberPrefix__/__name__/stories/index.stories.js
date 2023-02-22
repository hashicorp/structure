/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: TITLE,
  component: '<%= jsClass %>',
  parameters: { docs: { page: DocsPage } },
}

export const Index = (args) => ({
  template: hbs`
    <<%= tagName %>
      @isAwesome={{isAwesome}}
    >
      block content
    </<%= tagName %>>
  `,
  context: args,
})
Index.args = {
  isAwesome: true,
}
