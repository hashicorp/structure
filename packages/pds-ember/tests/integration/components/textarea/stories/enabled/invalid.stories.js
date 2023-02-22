/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import hbs from 'htmlbars-inline-precompile';
import Parent from './index.stories.js';

export default {
  ...Parent,
  title: `${Parent.title} / Invalid`,
};

export const Blurred = () => ({
  template: hbs`
    <Pds::Textarea
      @invalid={{true}}
    >Invalid (blur)</Pds::Textarea>
  `,
});

export const Hover = () => ({
  template: hbs`
    <Pds::Textarea
      class="mock-hover"
      @invalid={{true}}
    >Invalid (hover)</Pds::Textarea>
  `,
});

export const Focus = () => ({
  template: hbs`
    <Pds::Textarea
      class="mock-focus"
      @invalid={{true}}
    >Invalid (focus)</Pds::Textarea>
  `,
});

export const FocusHover = () => ({
  template: hbs`
    <Pds::Textarea
      class="mock-focus mock-hover"
      @invalid={{true}}
    >Invalid (focus + hover)</Pds::Textarea>
  `,
});
FocusHover.storyName = 'Focus + Hover';
