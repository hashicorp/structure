import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';
import Icons from '@hashicorp/structure-icons/dist/index';

export default {
  title: TITLE,
  parameters: { docs: { page: DocsPage } },
};

export const Index = (args) => ({
  template: hbs`
    <a href="#" class="{{variantClass}}">
      {{#if iconStart}}
        <Pds::Icon @type={{iconStart}} />
      {{/if}}
      {{text}}
      {{#if iconEnd}}
        <Pds::Icon @type={{iconEnd}} />
      {{/if}}
    </a>
  `,
  context: args,
})
Index.argTypes = {
  variantClass: {
    name: 'variant',
    defaultValue: '',
    control: {
      type: 'select',
      options: {
        underlined: 'pds--underlined',
        incognito: 'pds--incognito',
      }
    }
  },
  iconStart: {
    control: {
      type: 'select',
      options: ['', ...Icons],
    },
  },
  iconEnd: {
    control: {
      type: 'select',
      options: ['', ...Icons],
    },
  },
  text: {
    defaultValue: 'Link Text',
    control: 'text',
  },
}

export const WithLeadingIcon = () => ({
  template: hbs`
    <a href="#">
      <Pds::Icon @type="info-circle-fill" />
      Read More
    </a>
  `
})

export const WithTrailingIcon = () => ({
  template: hbs`
    <a href="#">
      Read More
      <Pds::Icon @type="exit" />
    </a>
  `
})

export const WithInlineCode = () => ({
  template: hbs`
    <a href="#">
      Read more about <code>label</code> in the docs.
    </a>
  `
})
