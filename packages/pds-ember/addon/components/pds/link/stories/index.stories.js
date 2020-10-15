import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

const CONFIG = {
  title: TITLE,
  parameters: { docs: { page: DocsPage } },
};

const Index = () => ({
  template: hbs`
    <a href="#">
      Read More
    </a>
  `,
});

const Hover = () => ({
  template: hbs`
    <a href="#" class="mock-hover">
      Read More
    </a>
  `,
});

const Focus = () => ({
  template: hbs`
    <a href="#" class="mock-focus">
      Read More
    </a>
  `,
});

const FocusHover = () => ({
  template: hbs`
    <a href="#" class="mock-focus mock-hover">
      Read More
    </a>
  `,
});

const Active = () => ({
  template: hbs`
    <a href="#" class="mock-active">
      Read More
    </a>
  `,
});

const WithLeadingIcon = () => ({
  template: hbs`
    <a href="#">
      <Pds::Icon @type="info-circle-fill" />
      Read More
    </a>
  `
});

const WithTrailingIcon = () => ({
  template: hbs`
    <a href="#">
      Read More
      <Pds::Icon @type="exit" />
    </a>
  `
});

const WithInlineCode = () => ({
  template: hbs`
    <a href="#">
      Read more about <code>label</code> in the docs.
    </a>
  `
});

export {
  CONFIG as default,
  Index,

  Hover,
  Focus,
  FocusHover,
  Active,

  WithLeadingIcon,
  WithTrailingIcon,
  WithInlineCode,
}
