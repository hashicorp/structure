import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE, SUBCOMPONENTS } from '../docs.mdx'

export default {
  title: TITLE,
  component: 'PdsGlobalHeader',
  subcomponents: SUBCOMPONENTS,
  parameters: { docs: { page: DocsPage } },
}

export const Index = (args) => ({
  template: hbs`
    <Docs::GlobalHeader />
  `,
  context: args,
})

export const WithExtraContent = (args) => ({
  template: hbs`
    <Docs::GlobalHeader>
      Extra content appears here!
    </Docs::GlobalHeader>
  `,
  context: args,
})

