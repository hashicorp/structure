import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: TITLE,
  component: 'PdsPage',
  subcomponents: {
    'P.Header': 'PdsPageHeader',
    'P.Body': 'PdsPageBody',
  },
  parameters: { docs: { page: DocsPage } },
  argTypes: {
    headerVariant: {
      name: 'header variant',
      defaultValue: '',
      control: {
        type: 'radio',
        options: {
          'plain (default)': '',
          'filled': 'filled',
        },
      },
    },
    headerActionVariant: {
      name: 'header action variant',
      control: {
        type: 'radio',
        options: ['primary', 'warning'],
      }
    },
  },
  args: {
    showActions: true,
    showTabs: true,
    headerVariant: 'filled',
    headerActionVariant: 'primary',
    pageTitle: 'Page Title',
  },
}

export const Index = (args) => ({
  template: hbs`
    <Pds::Page as |P|>
      <P.Header @variant={{headerVariant}} as |H|>
        <H.Breadcrumbs>
          <Docs::Breadcrumbs
            @depth={{3}}
            @showIcon={{true}}
          />
        </H.Breadcrumbs>

        <H.Title>
          {{pageTitle}}
        </H.Title>

        {{#if showActions}}
          <H.Actions>
            <Pds::ButtonSet>
              <Pds::Button @variant={{headerActionVariant}}>
                {{headerActionVariant}}
              </Pds::Button>
              <Pds::Dropdown @align="right" as |D|>
                <D.Trigger>secondary</D.Trigger>
                <D.Dialog>
                  <Docs::ContentSkeleton />
                </D.Dialog>
              </Pds::Dropdown>
            </Pds::ButtonSet>
          </H.Actions>
        {{/if}}

        {{#if showTabs}}
          <H.Tabs>
            <Docs::TabNav />
          </H.Tabs>
        {{/if}}
      </P.Header>

      <P.Body>
        Body Content
      </P.Body>
    </Pds::Page>
  `,
  context: args,
})
