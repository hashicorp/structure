import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: `${TITLE} / Patterns`,
  component: 'PdsPageHeader',
  parameters: { docs: { page: DocsPage } },
};

export const WithActions = (args) => ({
  template: hbs`
    <Pds::PageHeader @variant="filled" as |H|>
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
    </Pds::PageHeader>
  `,
  context: args,
});

export const WithActionsAndTabs = (args) => ({
  template: hbs`
    <Pds::PageHeader @variant="filled" as |H|>
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
    </Pds::PageHeader>
  `,
  context: args,
});
