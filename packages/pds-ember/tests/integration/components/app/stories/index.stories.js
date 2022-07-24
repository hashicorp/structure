import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

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
};

// Not very impressive, at the moment, but it demonstrates how `@showDrawer`
// trickles down to `<App.Drawer>` automatically via contextual components.
export const Index = (args) => ({
  template: hbs`
    <Pds::App @showDrawer={{showDrawer}} as |App|>
      <App.Banner></App.Banner>

      <App.Header>
        <Docs::GlobalHeader />
      </App.Header>

      <App.Sidebar>
        <Docs::Nav />
      </App.Sidebar>

      <App.Body>
        <Pds::Page as |Page|>
          <Page.Header @variant="filled" as |H|>
            <H.Breadcrumbs>
              [your breadcrumbs here]
            </H.Breadcrumbs>

            <H.Title>
              Page Title
            </H.Title>

            <H.Actions>
              <Pds::ButtonSet>
                <Pds::Button @variant="primary">
                  Primary
                </Pds::Button>
                <Pds::Dropdown @align="right" as |D|>
                  <D.Trigger>Secondary</D.Trigger>
                  <D.Dialog>
                    <Docs::ContentSkeleton />
                  </D.Dialog>
                </Pds::Dropdown>
              </Pds::ButtonSet>
            </H.Actions>

            <H.Tabs>
              <Docs::TabNav />
            </H.Tabs>
          </Page.Header>

          <Page.Body>
            {{! TODO: demonstrate some body content }}
            Page body
          </Page.Body>
        </Pds::Page>
      </App.Body>

      <App.Footer>
        <Pds::GlobalFooter />
      </App.Footer>

      <App.Drawer>
        App Drawer
      </App.Drawer>
    </Pds::App>
  `,
  context: args,
});
Index.args = { showDrawer: false };
Index.decorators = [
  // FIXME: Works, but doesn't clean up after itself
  // It leaves behind a <div class="docs-pds-app"> element when you navigate away.
  (Story) => {
    let { template, context } = Story();
    let element = document.createElement('div');
    element.classList.add('docs-pds-app');
    element.appendTo = (el) => {
      el.appendChild(element);
    };
    return { template, context, element };
  },
];
