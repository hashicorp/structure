import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: TITLE,
  component: 'PdsButtonSet',
  parameters: { docs: { page: DocsPage } },
}

export const Index = (args) => ({
  template: hbs`
    <Pds::ButtonSet>
      <Pds::Button @variant="primary">
        Primary
      </Pds::Button>

      <Pds::Button>
        Secondary
      </Pds::Button>

      <Pds::Button @variant="warning">
        Warning
      </Pds::Button>

      <Pds::Button @variant="ghost">
        Ghost
      </Pds::Button>
    </Pds::ButtonSet>
  `,
  context: args,
})
