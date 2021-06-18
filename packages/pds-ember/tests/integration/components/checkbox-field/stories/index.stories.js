import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: TITLE,
  component: 'PdsCheckboxField',
  parameters: { docs: { page: DocsPage } },
};

export const Index = (args) => ({
  template: hbs`
    <Pds::CheckboxField
      @invalid={{invalid}}
      disabled={{disabled}}
      checked={{checked}}
    as |f|>
      <span>
        {{#if label}}
          {{label}}
        {{else}}
          Label (<small>ID: <code>{{f.id}}</code></small>)
        {{/if}}
      </span>
    </Pds::CheckboxField>
  `,
  context: args,
});
Index.argTypes = {
  label: { control: 'text' },
};
Index.args = {
  checked: false,
  disabled: false,
  invalid: false,
};

export const MultiLineLabel = (args) => ({
  template: hbs`
    <Pds::CheckboxField>
      line 1<br />
      line 2<br />
      line 3
    </Pds::CheckboxField>
  `,
  context: args,
});
MultiLineLabel.storyName = 'Multi-line Label';
