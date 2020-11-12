import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: TITLE,
  component: 'PdsRadioField',
  parameters: { docs: { page: DocsPage } },
}

export const Index = (args) => ({
  template: hbs`
    <Pds::RadioField
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
    </Pds::RadioField>
  `,
  context: args,
})
Index.argTypes = {
  label: { control: 'text' },
}
Index.args = {
  checked: false,
  disabled: false,
  invalid: false,
}

export const MultiLineLabel = (args) => ({
  template: hbs`
    <Pds::RadioField>
      line 1<br />
      line 2<br />
      line 3
    </Pds::RadioField>
  `,
  context: args,
})
MultiLineLabel.storyName = 'Multi-line Label'

export const RadioGroup = (args) => ({
  template: hbs`
    <Pds::RadioField name="radGrp">Option 1</Pds::RadioField>
    <Pds::RadioField name="radGrp">Option 2</Pds::RadioField>
    <Pds::RadioField name="radGrp">Option 3</Pds::RadioField>
  `,
  context: args,
})
