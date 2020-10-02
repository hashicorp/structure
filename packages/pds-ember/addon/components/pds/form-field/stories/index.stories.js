import hbs from 'htmlbars-inline-precompile';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import DocsPage, { TITLE } from '../docs.mdx';
import { getContext } from './cfg';

const CONFIG = {
  title: TITLE,
  component: 'DocsFormField',
  decorators: [ withKnobs ],
  parameters: { docs: { page: DocsPage } },
};

const Index = () => ({
  template: hbs`
    <Docs::FormField
      @errorMessage={{errorMessage}}
      @helpText={{helpText}}
      @hideLabel={{hideLabel}}
      @isDirty={{isDirty}}
      @isDisabled={{isDisabled}}
      @isFocused={{isFocused}}
      @isHovered={{isHovered}}
      @isInvalid={{isInvalid}}
      @isRequired={{isRequired}}
      @name={{name}}
      @placeholder={{placeholder}}
      @type={{type}}
      @value={{value}}
    />
  `,
  context: getContext(),
});

const SelectField = () => ({
  template: hbs`
    <Docs::FormField::Select
      @isInvalid={{isInvalid}}
      @showHelp={{showHelp}}
      disabled={{isDisabled}}
    />
  `,
  context: {
    showHelp: boolean('Show Help', true),
    isInvalid: boolean('Invalid', false),
    isDisabled: boolean('Disabled', false),
  },
});

export {
  CONFIG as default,
  Index,
  SelectField,
}
