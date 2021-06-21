import hbs from 'htmlbars-inline-precompile';
import { withKnobs } from '@storybook/addon-knobs';
import DocsPage, { TITLE } from '../docs.mdx';

const CONFIG = {
  title: `${TITLE} / States`,
  component: 'PdsSelect',
  decorators: [withKnobs],
  parameters: { docs: { page: DocsPage } },
};

const Enabled = () => ({
  template: hbs`
    <Pds::Select>
      <option>Option 1</option>
    </Pds::Select>
  `,
});

const Enabled_hover = () => ({
  template: hbs`
    <Pds::Select class="mock-hover">
      <option>Option 1</option>
    </Pds::Select>
  `,
});

const Enabled_focus = () => ({
  template: hbs`
    <Pds::Select class="mock-focus">
      <option>Option 1</option>
    </Pds::Select>
  `,
});

const Enabled_focus_hover = () => ({
  template: hbs`
    <Pds::Select class="mock-focus mock-hover">
      <option>Option 1</option>
    </Pds::Select>
  `,
});

const Invalid = () => ({
  template: hbs`
    <Pds::Select
      @invalid={{true}}
    >
      <option>Option 1</option>
    </Pds::Select>
  `,
});

const Invalid_hover = () => ({
  template: hbs`
    <Pds::Select
      @invalid={{true}}
      class="mock-hover"
    >
      <option>Option 1</option>
    </Pds::Select>
  `,
});

const Invalid_focus = () => ({
  template: hbs`
    <Pds::Select
      @invalid={{true}}
      class="mock-focus"
    >
      <option>Option 1</option>
    </Pds::Select>
  `,
});

const Invalid_focus_hover = () => ({
  template: hbs`
    <Pds::Select
      @invalid={{true}}
      class="mock-focus mock-hover"
    >
      <option>Option 1</option>
    </Pds::Select>
  `,
});

const Disabled = () => ({
  template: hbs`
    <Pds::Select
      disabled={{true}}
    >
      <option>Option 1</option>
    </Pds::Select>
  `,
});

const Disabled_hover = () => ({
  template: hbs`
    <Pds::Select
      disabled={{true}}
      class="mock-hover"
    >
      <option>Option 1</option>
    </Pds::Select>
  `,
});

const Disabled_focus = () => ({
  template: hbs`
    <Pds::Select
      disabled={{true}}
      class="mock-focus"
    >
      <option>Option 1</option>
    </Pds::Select>
  `,
});

const Disabled_focus_hover = () => ({
  template: hbs`
    <Pds::Select
      disabled={{true}}
      class="mock-focus mock-hover"
    >
      <option>Option 1</option>
    </Pds::Select>
  `,
});

const LogicalValidity = () => ({
  template: hbs`
    <Pds::Select
      required={{true}}
      pds-dirty={{true}}
    >
      <option value="" selected>:invalid</option>
      <option value="valid">:valid</option>
    </Pds::Select>
  `,
});

const LengthySelection = () => ({
  template: hbs`
    <div style="width: 10rem">
      <p>
        <Pds::Select>
          <option>
            Option with long description. Just how long is this label anyhow? It
            seems like it could go on forever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
          </option>
        </Pds::Select>
      </p>
      <p>
        <Pds::Select @invalid={{true}}>
          <option>
            Option with long description. Just how long is this label anyhow? It
            seems like it could go on forever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
          </option>
        </Pds::Select>
      </p>
      <p>
        <Pds::Select disabled={{true}}>
          <option>
            Option with long description. Just how long is this label anyhow? It
            seems like it could go on forever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
            and ever and ever and ever and ever and ever and ever and ever and ever
          </option>
        </Pds::Select>
      </p>
    </div>
  `,
});

Enabled_hover.story = { name: 'Enabled (hover)' };
Enabled_focus.story = { name: 'Enabled (focus)' };
Enabled_focus_hover.story = { name: 'Enabled (focus + hover)' };
Invalid_hover.story = { name: 'Invalid (hover)' };
Invalid_focus.story = { name: 'Invalid (focus)' };
Invalid_focus_hover.story = { name: 'Invalid (focus + hover)' };
Disabled_hover.story = { name: 'Disabled (hover)' };
Disabled_focus.story = { name: 'Disabled (focus)' };
Disabled_focus_hover.story = { name: 'Disabled (focus + hover)' };

export {
  CONFIG as default,
  Enabled,
  Enabled_hover,
  Enabled_focus,
  Enabled_focus_hover,
  Invalid,
  Invalid_hover,
  Invalid_focus,
  Invalid_focus_hover,
  Disabled,
  Disabled_hover,
  Disabled_focus,
  Disabled_focus_hover,
  LogicalValidity,
  LengthySelection,
};
