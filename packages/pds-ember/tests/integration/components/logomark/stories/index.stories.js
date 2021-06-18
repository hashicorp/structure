import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsLogomark',
  parameters: { docs: { page: DocsPage } },
};

export const Index = (args) => ({
  template: hbs`
    <p>
      <Pds::Logomark::Consul />
      <Pds::Logomark::Hashicorp />
      <Pds::Logomark::Nomad />
      <Pds::Logomark::Terraform />
      <Pds::Logomark::Vault />
    </p>
  `,
  context: args,
});
