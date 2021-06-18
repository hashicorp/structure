import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';
import { ICON_TYPES, DEFAULT_VARIANT } from '@hashicorp/pds-ember/addon/components/pds/banner/utils';

const VARIANTS = Object.keys(ICON_TYPES);

export default {
  title: TITLE,
  component: 'PdsBanner',
  parameters: { docs: { page: DocsPage } },
  argTypes: {
    variant: {
      defaultValue: DEFAULT_VARIANT,
      control: {
        type: 'radio',
        options: VARIANTS,
      },
    },
  },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::Banner @variant={{variant}} as |B|>
      <B.Header>
        Banner Title
      </B.Header>

      <B.Body>
        Banner Content
      </B.Body>

      <B.Footer>
        Banner Footer
      </B.Footer>
    </Pds::Banner>
  `,
  context: args,
});

// Incorrect usage
export const IncorrectUsage = (args) => ({
  template: hbs`
    <Pds::Banner @variant={{variant}}>
      Non-contextual component child content (<b>Don't do this!</b>),
      <em>EVERY</em> html element and text node will
      be incorrectly arranged into <span>dynamic CSS grid areas</span>.
    </Pds::Banner>
  `,
  context: args,
});
