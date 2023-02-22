/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsAvatar',
  parameters: { docs: { page: DocsPage } },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::Avatar @alt="user avatar" />
    <br/>
    <Pds::Avatar @src="User-Avatar.png" @alt="user avatar" />
  `,
  context: args,
});
