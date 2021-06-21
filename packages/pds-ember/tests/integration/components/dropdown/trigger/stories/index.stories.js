import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

import ICONS from '@hashicorp/structure-icons/dist/index';

import { DEFAULT_VARIANT, VARIANT_CLASSES } from '@hashicorp/pds-ember/addon/components/pds/button/utils';
const VARIANTS = Object.keys(VARIANT_CLASSES);

export default {
  title: TITLE,
  component: 'PdsDropdownTrigger',
  parameters: { docs: { page: DocsPage } },
  argTypes: {
    compact: {},
    hideText: {},
    icon: {
      defaultValue: 'chevron-down',
      control: {
        type: 'select',
        options: ICONS,
      },
    },
    variant: {
      defaultValue: DEFAULT_VARIANT,
      control: {
        type: 'radio',
        options: VARIANTS,
      },
    },
  },
  args: {
    compact: false,
    hideText: false,
  },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::Dropdown::Trigger
      @compact={{compact}}
      @hideText={{hideText}}
      @icon={{icon}}
      @variant={{variant}}
    >
      Trigger
    </Pds::Dropdown::Trigger>
  `,
  context: args,
});

export const IconOnly = (args) => ({
  template: hbs`
    <Pds::Dropdown::Trigger
      @icon={{icon}}
      aria-label="Toggle"
    />
  `,
  context: args,
});

// TODO: icon + hidden text example
