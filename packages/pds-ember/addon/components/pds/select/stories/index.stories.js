import hbs from 'htmlbars-inline-precompile';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import DocsPage, { TITLE } from '../docs.mdx';

const CONFIG = {
  title: TITLE,
  component: 'PdsSelect',
  decorators: [ withKnobs ],
  parameters: { docs: { page: DocsPage } },
};

const Index = () => ({
  template: hbs`
    <Pds::Select
      @options={{options}}
      pds-dirty={{isDirty}}
      required={{isRequired}}
    />
  `,
  context: {
    options: [
      { value: '', label: '(select an option)' },
      'Larry',
      'Curly',
      'Mo',
      'Shemp',
      'Joe',
    ],
    isRequired: boolean('Required', false),
    isDirty: boolean('Dirty', false),
  },
});

export {
  CONFIG as default,

  Index,
};
