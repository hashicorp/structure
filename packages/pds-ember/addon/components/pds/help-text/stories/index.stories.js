import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

const CONFIG = {
  title: TITLE,
  component: 'PdsHelpText',
  parameters: { docs: { page: DocsPage } },
};

const Index = () => ({
  template: hbs`
    <Pds::HelpText>
      Selecting the bottlenecks should allow our spike to rank the relative
      branch off the emergence. Working the customers should allow our product
      vision to estimate the quarterly feature past the complexity. It was
      discovered that by always building the PR impediments, we can open the
      visible XP branch upon the adaptive automation.
    </Pds::HelpText>
  `,
});

export {
  CONFIG as default,
  Index,
}
