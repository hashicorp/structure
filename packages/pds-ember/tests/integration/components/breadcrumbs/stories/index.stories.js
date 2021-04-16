import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsBreadcrumbs',
  parameters: { docs: { page: DocsPage } },
  argTypes: {
    showIcon: {
      name: 'Show Icon',
      defaultValue: false,
      description: 'Preview with folder icon',
      control: 'boolean',
    },
  },
};

// Shallow Nesting (1-4 levels)
export const Index = (args) => ({
  template: hbs`
    <Docs::Breadcrumbs
      @depth={{depth}}
      @showIcon={{showIcon}}
    />
  `,
  context: args,
});
Index.argTypes = {
  depth: {
    name: 'Depth',
    defaultValue: 3,
    description: 'Number of levels to render',
    control: {
      max: 4,
      min: 1,
      step: 1,
      type: 'range',
    },
  },
};

// Deep Nesting (5+ levels)
// (show first crumb and last 3 crumbs; hide 2 through N-3)
export const DeepNesting = (args) => ({
  template: hbs`
    <Pds::Breadcrumbs as |B|>
      {{#if showIcon}}
        <Pds::Icon @type="folder-outline" />
      {{/if}}
      <B.Crumb><a href="#">Level 1</a></B.Crumb>
      <B.Crumb aria-hidden="true">...</B.Crumb>
      <B.Crumb><a href="#">Level 5</a></B.Crumb>
      <B.Crumb><a href="#">Level 6</a></B.Crumb>
      <B.Crumb><a href="#">Level 7</a></B.Crumb>
    </Pds::Breadcrumbs>
  `,
  context: args,
});

// Demonstrate overflow using the "Viewport" addon.
export const LengthyContent = (args) => ({
  template: hbs`
    <Pds::Breadcrumbs as |B|>
      {{#if showIcon}}
        <Pds::Icon @type="folder-outline" />
      {{/if}}
      <B.Crumb><a href="#">Level 1</a></B.Crumb>
      <B.Crumb aria-hidden="true">...</B.Crumb>
      <B.Crumb><a href="#">Level 5 with lengthy text</a></B.Crumb>
      <B.Crumb><a href="#">Level 6 with lengthy text</a></B.Crumb>
      <B.Crumb><a href="#">Level 7 with lengthy text</a></B.Crumb>
    </Pds::Breadcrumbs>
  `,
  context: args,
});
LengthyContent.args = {
  showIcon: true,
};
