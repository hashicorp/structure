import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsNav',
  parameters: { docs: { page: DocsPage } },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::App::Sidebar>
      <Docs::Nav />
    </Pds::App::Sidebar>
  `,
  context: args,
});

export const States = (args) => ({
  template: hbs`
    <Pds::App::Sidebar>
      <Pds::Nav>
        <section>
          <a href="#">Link</a>
          <a href="#" class="mock-hover">Link (Hover)</a>
          <a href="#">Link</a>
          <a href="#" class="mock-focus">Link (Focus)</a>
          <a href="#">Link</a>
          <a href="#" class="mock-active">Link (Active)</a>
          <a href="#">Link</a>
          <a href="#" class="active">Link (Current)</a>
          <a href="#">Link</a>
        </section>
      </Pds::Nav>
    </Pds::App::Sidebar>
  `,
  context: args,
});
