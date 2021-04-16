import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsGlobalFooter',
  parameters: { docs: { page: DocsPage } },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::GlobalFooter />
  `,
  context: args,
});

export const WithProductName = (args) => ({
  template: hbs`
    <Pds::GlobalFooter as |F|>
      <F.ProductName>
        Product Name v1.2.3-rc.4
      </F.ProductName>
    </Pds::GlobalFooter>
  `,
  context: args,
});

export const WithNav = (args) => ({
  template: hbs`
    <Pds::GlobalFooter as |F|>
      <F.Nav>
        <a href="#">Documentation</a>
        <a href="#">Notices</a>
      </F.Nav>
    </Pds::GlobalFooter>
  `,
  context: args,
});

export const WithProductNameAndNav = (args) => ({
  template: hbs`
    <Pds::GlobalFooter as |F|>
      <F.ProductName>
        Product Name v1.2.3-rc.4
      </F.ProductName>
      <F.Nav>
        <a href="#">Documentation</a>
        <a href="#">Notices</a>
      </F.Nav>
    </Pds::GlobalFooter>
  `,
  context: args,
});
