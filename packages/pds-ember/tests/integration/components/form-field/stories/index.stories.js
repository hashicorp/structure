/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import hbs from 'htmlbars-inline-precompile';
import { withKnobs } from '@storybook/addon-knobs';
import DocsPage, { TITLE } from '../docs.mdx';
import { getContext } from './cfg';

export default {
  title: TITLE,
  decorators: [withKnobs],
  parameters: { docs: { page: DocsPage } },
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'disable user entry',
    },
    invalid: {
      control: 'boolean',
      defaultValue: false,
      description: 'simulate invalid data',
    },
    showHelp: {
      control: 'boolean',
      defaultValue: true,
      description: 'display help text',
    },
  },
};

export const Index = () => ({
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

export const SelectField = (args) => ({
  template: hbs`
    <Docs::FormField::Select
      @isInvalid={{invalid}}
      @showHelp={{showHelp}}
      disabled={{disabled}}
    />
  `,
  context: args,
});

export const TextareaField = (args) => ({
  template: hbs`
    <Docs::FormField::Textarea
      @invalid={{invalid}}
      @showHelp={{showHelp}}
      disabled={{disabled}}
    />
  `,
  context: args,
});
