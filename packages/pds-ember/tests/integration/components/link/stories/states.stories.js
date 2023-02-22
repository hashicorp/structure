/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: `${TITLE} / States`,
  parameters: { docs: { page: DocsPage } },
};

export const Blurred = () => ({
  template: hbs`<Docs::Link />`,
});

export const Hovered = () => ({
  template: hbs`<Docs::Link class="mock-hover" />`,
});

export const Focused = () => ({
  template: hbs`<Docs::Link class="mock-focus" />`,
});

export const FocusHover = () => ({
  template: hbs`<Docs::Link class="mock-focus mock-hover" />`,
});
FocusHover.storyName = 'Focused + Hovered';

export const Active = () => ({
  template: hbs`<Docs::Link class="mock-active" />`,
});
