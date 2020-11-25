import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: TITLE,
  component: 'PdsPageHeader',
  parameters: { docs: { page: DocsPage } },
  argTypes: {
    variant: {
      defaultValue: '',
      control: {
        type: 'radio',
        options: {
          'plain (default)': '',
          'filled': 'filled',
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
    <Pds::PageHeader @variant={{variant}} as |H|>
      <H.Breadcrumbs>
        <Docs::Breadcrumbs
          @depth={{3}}
          @showIcon={{true}}
        />
      </H.Breadcrumbs>

      <H.Title>
        Page Title
      </H.Title>
    </Pds::PageHeader>
  `,
  context: args,
})
