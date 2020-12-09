import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'
import ICONS from '@hashicorp/structure-icons/dist/index';

export default {
  title: TITLE,
  component: 'PdsCtaLink',
  parameters: { docs: { page: DocsPage } },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: {
          'primary (default)': '',
          'ghost': 'ghost',
        },
      },
    },
  },
  args: {
    variant: '',
  },
}


export const Index = (args) => ({
  template: hbs`
    <Docs::CtaLink @variant={{variant}}>
      Call to Action
    </Docs::CtaLink>
  `,
  context: args,
})


export const WithIcon = (args) => ({
  template: hbs`
    <Docs::CtaLink class="pds--iconEnd" @variant={{variant}}>
      {{! text MUST be wrapped in <span> }}
      <span>Action</span>
      <Pds::Icon @type={{icon}} />
    </Docs::CtaLink>
  `,
  context: args,
})
WithIcon.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: ICONS,
    },
  },
}
WithIcon.args = {
  icon: 'chevron-right',
}
