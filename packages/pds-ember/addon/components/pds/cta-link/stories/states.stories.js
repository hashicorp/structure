import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: `${TITLE} / States`,
  component: 'PdsCtaLink',
  parameters: { docs: { page: DocsPage } },
}

export const Enabled = () => ({
  template: hbs`
    <Docs::CtaLink::States />
  `,
})

export const EnabledHover = () => ({
  template: hbs`
    <Docs::CtaLink::States
      class="mock-hover"
    />
  `,
})
EnabledHover.storyName = 'Enabled + Hover'

export const EnabledFocus = () => ({
  template: hbs`
    <Docs::CtaLink::States
      class="mock-focus"
    />
  `,
})
EnabledFocus.storyName = 'Enabled + Focus'

export const EnabledFocusHover = () => ({
  template: hbs`
    <Docs::CtaLink::States
      class="mock-focus mock-hover"
    />
  `,
})
EnabledFocusHover.storyName = 'Enabled + Focus + Hover'

export const EnabledFocusActive = () => ({
  template: hbs`
    <Docs::CtaLink::States
      class="mock-focus mock-active"
    />
  `,
})
EnabledFocusActive.storyName = 'Enabled + Focus + Active'

export const EnabledFocusActiveHover = () => ({
  template: hbs`
    <Docs::CtaLink::States
      class="mock-focus mock-active mock-hover"
    />
  `,
})
EnabledFocusActiveHover.storyName = 'Enabled + Focus + Active + Hover'




export const Disabled = () => ({
  template: hbs`
    <Docs::CtaLink::States
      @disabled={{true}}
    />
  `,
})

export const DisabledHover = () => ({
  template: hbs`
    <Docs::CtaLink::States
      class="mock-hover"
      @disabled={{true}}
    />
  `,
})
DisabledHover.storyName = 'Disabled + Hover'

export const DisabledFocus = () => ({
  template: hbs`
    <Docs::CtaLink::States
      class="mock-focus"
      @disabled={{true}}
    />
  `,
})
DisabledFocus.storyName = 'Disabled + Focus'

export const DisabledFocusHover = () => ({
  template: hbs`
    <Docs::CtaLink::States
      class="mock-focus mock-hover"
      @disabled={{true}}
    />
  `,
})
DisabledFocusHover.storyName = 'Disabled + Focus + Hover'

export const DisabledFocusActive = () => ({
  template: hbs`
    <Docs::CtaLink::States
      class="mock-focus mock-active"
      @disabled={{true}}
    />
  `,
})
DisabledFocusActive.storyName = 'Disabled + Focus + Active'

export const DisabledFocusActiveHover = () => ({
  template: hbs`
    <Docs::CtaLink::States
      class="mock-focus mock-active mock-hover"
      @disabled={{true}}
    />
  `,
})
DisabledFocusActiveHover.storyName = 'Disabled + Focus + Active + Hover'
