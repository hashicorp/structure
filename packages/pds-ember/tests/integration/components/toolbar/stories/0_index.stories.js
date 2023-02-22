/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsToolbar',
  parameters: { docs: { page: DocsPage } },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::Toolbar as |T|>
      <T.Start>
        Start/Left Content
      </T.Start>

      <T.End>
        End/Right Content
      </T.End>
    </Pds::Toolbar>
  `,
  context: args,
});
