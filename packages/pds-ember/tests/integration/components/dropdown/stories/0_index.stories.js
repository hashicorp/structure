import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsDropdown',
  subcomponents: {
    'D.Trigger': 'PdsDropdownTrigger',
    'D.Dialog': 'PdsDropdownDialog',
    'D.ListItem': 'PdsDropdownListItem',
  },
  parameters: { docs: { page: DocsPage } },
  argTypes: {
    onToggle: { action: '@onToggle' },
    align: {
      defaultValue: 'left',
      control: {
        type: 'radio',
        options: {
          'left (default)': 'left',
          right: 'right',
        },
      },
    },
  },
  args: {
    isOpen: false,
  },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::Dropdown
      @onToggle={{onToggle}}
      @isOpen={{isOpen}}
      @align={{align}}
      as |D|
    >
      <D.Trigger>
        Dropdown
      </D.Trigger>

      <D.Dialog>
        <Docs::ContentSkeleton />
      </D.Dialog>
    </Pds::Dropdown>
  `,
  context: args,
});
