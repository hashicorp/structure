/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  parameters: { docs: { page: DocsPage } },
};

export const Index = (args) => ({
  template: hbs`
    <a href="#" class="{{variantClass}}">
      {{text}}
    </a>
  `,
  context: args,
});
Index.argTypes = {
  variantClass: {
    name: 'variant',
    defaultValue: '',
    control: {
      type: 'select',
      options: {
        underlined: 'pds--underlined',
        incognito: 'pds--incognito',
      },
    },
  },
  text: {
    defaultValue: 'Link Text',
    control: 'text',
  },
};

export const WithInlineCode = () => ({
  template: hbs`
    <a href="#">
      Read more about <code>label</code> in the docs.
    </a>
  `,
});
