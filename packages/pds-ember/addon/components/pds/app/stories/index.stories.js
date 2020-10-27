import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: TITLE,
  component: 'PdsApp',
  subcomponents: {
    'App.Banner': 'PdsAppBanner',
    'App.Body': 'PdsAppBody',
    'App.Drawer': 'PdsAppDrawer',
    'App.Footer': 'PdsAppFooter',
    'App.Header': 'PdsAppHeader',
    'App.ModalArea': 'PdsAppModalArea',
    'App.Sidebar': 'PdsAppSidebar',
  },
  parameters: { docs: { page: DocsPage } },
}

// Not very impressive, at the moment, but it demonstrates how `@showDrawer`
// trickles down to `<App.Drawer>` automatically via contextual components.
export const Index = (args) => ({
  template: hbs`
    <Pds::App @showDrawer={{showDrawer}} as |App|>
      <App.Banner></App.Banner>
      <App.Header>Header</App.Header>
      <App.Sidebar>Sidebar</App.Sidebar>
      <App.Body>Body</App.Body>
      <App.Footer>Footer</App.Footer>
      <App.Drawer>Drawer</App.Drawer>
    </Pds::App>
  `,
  context: args,
})
Index.args = { showDrawer: false }
Index.decorators = [
  // FIXME: Works, but doesn't clean up after itself
  // It leaves behind a <div class="docs-pds-app"> element when you navigate away.
  (Story) => {
    let { template, context } = Story()
    let element = document.createElement('div')
    element.classList.add('docs-pds-app')
    element.appendTo = (el) => { el.appendChild(element) }
    return { template, context, element }
  },
]
