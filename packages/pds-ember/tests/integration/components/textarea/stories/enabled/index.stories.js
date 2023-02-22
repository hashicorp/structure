/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import hbs from 'htmlbars-inline-precompile';
import Parent from '../index.stories.js';

export default {
  ...Parent,
  title: `${Parent.title} / Enabled`,
  parameters: {
    controls: { disable: true },
  },
};

export const Blurred = () => ({
  template: hbs`
    <Pds::Textarea>Enabled (blur)</Pds::Textarea>
  `,
});

export const Hover = () => ({
  template: hbs`
    <Pds::Textarea
      class="mock-hover"
    >Enabled (hover)</Pds::Textarea>
  `,
});

export const Focus = () => ({
  template: hbs`
    <Pds::Textarea
      class="mock-focus"
    >Enabled (focus)</Pds::Textarea>
  `,
});

export const FocusHover = () => ({
  template: hbs`
    <Pds::Textarea
      class="mock-focus mock-hover"
    >Enabled (focus + hover)</Pds::Textarea>
  `,
});
FocusHover.storyName = 'Focus + Hover';
