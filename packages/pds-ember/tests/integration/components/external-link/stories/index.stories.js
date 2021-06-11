import ICONS from '@hashicorp/structure-icons/dist/index';
import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsExternalLink',
  parameters: { docs: { page: DocsPage } },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::ExternalLink
      href="#"
      @hideIcon={{hideIcon}}
      @iconEnd={{iconEnd}}
      @iconStart={{iconStart}}
    >
      External Link
    </Pds::ExternalLink>
  `,
  context: args,
});
Index.argTypes = {
  hideIcon: {
    name: '@hideIcon',
    description: '(optional) hides icon',
  },
  iconStart: {
    name: '@iconStart',
    description:
      '(optional) applied via `<Pds::Icon>` in block content at start',
    control: {
      type: 'select',
      options: ICONS,
    },
  },
  iconEnd: {
    name: '@iconEnd',
    description: '(optional) applied via `<Pds::Icon>` in block content at end',
    control: {
      type: 'select',
      options: ICONS,
    },
  },
};
Index.args = {
  hideIcon: false,
  iconStart: '',
  iconEnd: '',
};
