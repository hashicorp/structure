import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: TITLE,
  component: 'PdsCtaLink',
  parameters: { docs: { page: DocsPage } },
}

// NOTE: we're imitating rendered HTML, because we cannot
// register any routes in storybook for `<LinkTo>` to render
// a live hyperlink
export const Index = () => ({
  template: hbs`
    <a href="#" class="pds--cta">
      Call to Action
    </a>
  `,
})
