import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsCtaLink',
  parameters: { docs: { page: DocsPage } },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: {
          ghost: 'ghost',
          primary: 'primary',
          'secondary (default)': '',
          warning: 'warning',
        },
      },
    },
  },
  args: {
    variant: '',
  },
};

export const Index = (args) => ({
  template: hbs`
    <Docs::CtaLink @variant={{variant}}>
      Call to Action
    </Docs::CtaLink>
  `,
  context: args,
});

export const WithIcon = (args) => ({
  template: hbs`
    <Docs::CtaLink class="pds--iconEnd" @variant={{variant}}>
      {{! text MUST be wrapped in <span> }}
      <span>Action</span>
      <FlightIcon @name={{icon}} />
    </Docs::CtaLink>
  `,
  context: args,
});
WithIcon.args = {
  icon: 'chevron-right',
};
