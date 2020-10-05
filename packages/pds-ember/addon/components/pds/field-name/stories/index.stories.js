import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

const CONFIG = {
  title: TITLE,
  component: 'DocsFieldName',
  parameters: { docs: { page: DocsPage } },
};

const Index = () => ({
  template: hbs`
    <label class="pds-fieldName">
      Field Name using LABEL
    </label>
  `,
});

const Legend = () => ({
  template: hbs`
    <fieldset>
      <legend class="pds-fieldName">
        Field Name using LEGEND
      </legend>
    </fieldset>
  `,
});

export {
  CONFIG as default,
  Index,
  Legend,
}
