import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsTextarea',
  parameters: { docs: { page: DocsPage }, knobs: { disable: true } },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::Textarea
      class="
        {{if mockFocus 'mock-focus'}}
        {{if mockHover 'mock-hover'}}
      "
      @invalid={{invalid}}
      disabled={{disabled}}
      placeholder={{placeholder}}
    >{{sampleText}}</Pds::Textarea>
  `,
  context: args,
});

Index.argTypes = {
  invalid: {
    name: '@invalid',
    control: { type: 'boolean' },
    defaultValue: false,
  },
  disabled: {
    name: ':disabled',
    control: 'boolean',
    defaultValue: false,
    description: 'apply the `[disabled]` attribute',
  },
  mockFocus: {
    name: ':focus',
    control: 'boolean',
    defaultValue: false,
    description: 'mimic `:focus` interaction',
  },
  mockHover: {
    name: ':hover',
    type: 'boolean',
    defaultValue: false,
    description: 'mimic `:hover` interaction',
  },
  placeholder: {
    control: 'text',
    description: 'set the `[placeholder]` attribute',
  },
  sampleText: {
    control: 'text',
    description: 'sample text content',
    defaultValue: [
      'The quick brown fox jumps over the lazy dog.',
      'Amazingly few discotheques provide jukeboxes.',
      'The five boxing wizards jump quickly.',
    ].join('\n'),
  },
};
