import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsDivider',
  parameters: { docs: { page: DocsPage } },
  args: {
    vertical: false,
  },
};

export const Index = (args) => ({
  template: hbs`
    <p>
      <span>BEFORE</span>
      <Pds::Divider @vertical={{vertical}} />
      <span>AFTER</span>
    </p>
  `,
  context: args,
});
