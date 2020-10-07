import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

const CONFIG = {
  title: TITLE,
  parameters: { docs: { page: DocsPage } },
};

const Index = () => ({
  template: hbs`
    <h2 class="pds-heading pds--0">Heading 0</h2>
    <h2 class="pds-heading pds--1">Heading 1</h2>
    <h2 class="pds-heading pds--2">Heading 2</h2>
    <h2 class="pds-heading pds--3">Heading 3</h2>
    <h2 class="pds-heading pds--4">Heading 4</h2>
  `,
});

export {
  CONFIG as default,
  Index,
}
