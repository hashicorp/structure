import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'
import { ICON_TYPES, DEFAULT_VARIANT } from '@hashicorp/pds-ember/addon/components/pds/popup/utils';


const VARIANTS = Object.keys(ICON_TYPES)

export default {
  title: TITLE,
  component: 'PdsPopup',
  parameters: { docs: { page: DocsPage } },
  argTypes: {
    onClose: { action: '@onClose' },
  },
}

export const Index = (args) => ({
  template: hbs`
    <Pds::Popup
      @variant={{variant}}
      @onClose={{onClose}}
      as |P|
    >
      <P.Header>
        Popup Title
      </P.Header>

      <P.Body>
        Popup Body
      </P.Body>

      <P.Footer>
        <a href="#">Link Action</a>
      </P.Footer>
    </Pds::Popup>
  `,
  context: args,
})
Index.argTypes = {
  variant: {
    defaultValue: DEFAULT_VARIANT,
    control: {
      type: 'radio',
      options: VARIANTS,
    },
  },
}

export const Variants = (args) => ({
  template: hbs`
    {{#each VARIANTS as |variant|}}
      <Pds::Popup @onClose={{onClose}} @variant={{variant}} as |P|>
        <P.Header>Title</P.Header>
        <P.Body>Text</P.Body>
        <P.Footer>
          <a href="#">Action</a>
        </P.Footer>
      </Pds::Popup>
      <br />
    {{/each}}
  `,
  context: {
    ...args,
    VARIANTS,
  },
})
