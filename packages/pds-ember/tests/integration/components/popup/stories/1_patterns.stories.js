import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';
import { ICON_TYPES, DEFAULT_VARIANT } from '@hashicorp/pds-ember/addon/components/pds/popup/utils';

const VARIANTS = Object.keys(ICON_TYPES);

export default {
  title: `${TITLE} / Patterns`,
  component: 'PdsPopup',
  parameters: { docs: { page: DocsPage } },
  argTypes: {
    onClose: { action: '@onClose' },
    variant: {
      defaultValue: DEFAULT_VARIANT,
      control: {
        type: 'radio',
        options: VARIANTS,
      },
    },
  },
};

export const Simple = (args) => ({
  template: hbs`
    <Pds::Popup @variant={{variant}} as |P|>
      <P.Header>
        Popup Title
      </P.Header>
    </Pds::Popup>
  `,
  context: args,
});

export const WithBody = (args) => ({
  template: hbs`
    <Pds::Popup @variant={{variant}} as |P|>
      <P.Header>
        Popup Title
      </P.Header>

      <P.Body>
        Popup Body
      </P.Body>
    </Pds::Popup>
  `,
  context: args,
});

export const WithBodyAndAction = (args) => ({
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
});

export const LengthyContent = (args) => ({
  template: hbs`
    <Pds::Popup
      @variant={{variant}}
      @onClose={{onClose}}
      as |P|
    >
      <P.Header>
        Popup Title -
        The quick brown fox jumps over the lazy dog.
        The quick brown fox jumps over the lazy dog.
        The quick brown fox jumps over the lazy dog.
        The quick brown fox jumps over the lazy dog.
        The quick brown fox jumps over the lazy dog.
        The quick brown fox jumps over the lazy dog.
      </P.Header>

      <P.Body>
        Popup Body &mdash;
        As a user, I should be able to spike the single task so that I can adapt the visible WIP commitments against the domain tests. The best way to block minimum feedback is to thoughtfully plan their alignment. Try to detail the burnup feature, maybe it will help test the VOC teams. It was discovered that by quickly deciding the MVP methodologies, we can detail the major VOC value above the business colocation. The best way to refactor branch off software development is to carefully prevent their deadline.
        We must typically decide the numerous VOC sprint backlog! The best way to test continuous cycle time is to perfectly refactor their level of effort. We must successfully adapt the continuous MVP pace!
      </P.Body>

      <P.Footer>
        <a href="#">Link Action</a>
      </P.Footer>
    </Pds::Popup>
  `,
  context: args,
});
