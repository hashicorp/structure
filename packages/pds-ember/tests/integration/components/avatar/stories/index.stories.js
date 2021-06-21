import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsAvatar',
  parameters: { docs: { page: DocsPage } },
  args: {
    src: '',
    alt: 'user avatar',
  },
  argTypes: {
    src: {
      control: {
        type: 'radio',
        options: {
          'blank (default)': '',
          'User-Avatar.png (example; not included)': 'User-Avatar.png',
        },
      },
    },
  },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::Avatar
      @src={{src}}
      @alt={{alt}}
    />
  `,
  context: args,
});
