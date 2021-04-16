import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsEmptyState',
  parameters: { docs: { page: DocsPage } },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::EmptyState as |MT|>
      <MT.Header>
        No resources were found.
      </MT.Header>

      <MT.Body>
        The best way to document marketable work in progress is to intentionally
        plan their sequence. Ranking the standards should allow our application
        to spike the single criteria beside the development.
      </MT.Body>

      <MT.Footer>
        <Pds::Button @compact={{true}}>
          Add a Resource
        </Pds::Button>
      </MT.Footer>
    </Pds::EmptyState>
  `,
  context: args,
});

export const HeaderAndBody = (args) => ({
  template: hbs`
    <Pds::EmptyState as |MT|>
      <MT.Header>
        No resources were found.
      </MT.Header>

      <MT.Body>
        The best way to document marketable work in progress is to intentionally
        plan their sequence. Ranking the standards should allow our application
        to spike the single criteria beside the development.
      </MT.Body>
    </Pds::EmptyState>
  `,
  context: args,
});

export const HeaderOnly = (args) => ({
  template: hbs`
    <Pds::EmptyState as |MT|>
      <MT.Header>
        No resources were found.
      </MT.Header>
    </Pds::EmptyState>
  `,
  context: args,
});
