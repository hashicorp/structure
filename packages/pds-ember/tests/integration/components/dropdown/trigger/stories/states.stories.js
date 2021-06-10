import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

import ICONS from '@hashicorp/structure-icons/dist/index';

export default {
  title: `${TITLE} / States`,
  component: 'PdsDropdownTrigger',
  parameters: { docs: { page: DocsPage } },
}

const TEMPLATE = (args) => ({
  template: hbs`
    <Pds::Dropdown::Trigger
      @icon={{icon}}
      class="{{classes}}"
    >
      Trigger
    </Pds::Dropdown::Trigger>
  `,
  context: args,
})

// :enabled
export const Enabled = TEMPLATE.bind({})
Enabled.storyName = ':enabled'
// :enabled:hover
export const EnabledHover = TEMPLATE.bind({})
EnabledHover.storyName = ':enabled:hover'
EnabledHover.args = {
  classes: 'mock-hover'
}
// :enabled:focus
export const EnabledFocus = TEMPLATE.bind({})
EnabledFocus.storyName = ':enabled:focus'
EnabledFocus.args = {
  classes: 'mock-focus'
}
// :enabled:focus:hover
export const EnabledFocusHover = TEMPLATE.bind({})
EnabledFocusHover.storyName = ':enabled:focus:hover'
EnabledFocusHover.args = {
  classes: 'mock-focus mock-hover'
}
// :enabled:focus:active
export const EnabledFocusActive = TEMPLATE.bind({})
EnabledFocusActive.storyName = ':enabled:focus:active'
EnabledFocusActive.args = {
  classes: 'mock-focus mock-active'
}
// :enabled:focus:active:hover
export const EnabledFocusActiveHover = TEMPLATE.bind({})
EnabledFocusActiveHover.storyName = ':enabled:focus:active:hover'
EnabledFocusActiveHover.args = {
  classes: 'mock-focus mock-active mock-hover'
}

/*
  NOTE: "disabled" styling not currently supported
    - no known use cases
    - requires additional functionality to implement, because `<summary>`
      cannot be semantically `:disabled`
*/
// "disabled"
// "disabled":hover
// "disabled":focus
// "disabled":focus:hover
