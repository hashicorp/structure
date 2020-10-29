import ICONS from '@hashicorp/structure-icons/dist/index';
import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: TITLE,
  component: 'PdsExternalLink',
  parameters: { docs: { page: DocsPage } },
}

export const Index = (args) => ({
  template: hbs`
    <Pds::ExternalLink
      href="#"
      @hideIcon={{hideIcon}}
    >
      {{#if iconType}}
        <Pds::Icon @type={{iconType}} />
      {{/if}}
      External Link
    </Pds::ExternalLink>
  `,
  context: args,
})
Index.argTypes = {
  hideIcon: {
    name: '@hideIcon',
  },
  iconType: {
    name: 'leading icon',
    description: '(optional) applied via `<Pds::Icon>` in block content',
    control: {
      type: 'select',
      options: ICONS,
    },
  },
}
Index.args = {
  hideIcon: false,
}
