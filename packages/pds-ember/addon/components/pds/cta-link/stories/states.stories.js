import hbs from 'htmlbars-inline-precompile'
import Parent from './index.stories'

export default {
  ...Parent,
  title: `${Parent.title} / States`,
}

export const Enabled = () => ({
  template: hbs`
    <a href="#" class="pds--cta">
      CTA Link
    </a>
  `,
})

export const EnabledHover = () => ({
  template: hbs`
    <a href="#" class="pds--cta mock-hover">
      CTA Link
    </a>
  `,
})
EnabledHover.storyName = 'Enabled + Hover'

export const EnabledFocus = () => ({
  template: hbs`
    <a href="#" class="pds--cta mock-focus">
      CTA Link
    </a>
  `,
})
EnabledFocus.storyName = 'Enabled + Focus'

export const EnabledFocusHover = () => ({
  template: hbs`
    <a href="#" class="pds--cta mock-focus mock-hover">
      CTA Link
    </a>
  `,
})
EnabledFocusHover.storyName = 'Enabled + Focus + Hover'

export const EnabledFocusActive = () => ({
  template: hbs`
    <a href="#" class="pds--cta mock-focus mock-active">
      CTA Link
    </a>
  `,
})
EnabledFocusActive.storyName = 'Enabled + Focus + Active'

export const EnabledFocusActiveHover = () => ({
  template: hbs`
    <a href="#" class="pds--cta mock-focus mock-active mock-hover">
      CTA Link
    </a>
  `,
})
EnabledFocusActiveHover.storyName = 'Enabled + Focus + Active + Hover'




export const Disabled = () => ({
  template: hbs`
    <a href="#" class="pds--cta pds--disabled">
      CTA Link
    </a>
  `,
})

export const DisabledHover = () => ({
  template: hbs`
    <a href="#" class="pds--cta pds--disabled mock-hover">
      CTA Link
    </a>
  `,
})
DisabledHover.storyName = 'Disabled + Hover'

export const DisabledFocus = () => ({
  template: hbs`
    <a href="#" class="pds--cta pds--disabled mock-focus">
      CTA Link
    </a>
  `,
})
DisabledFocus.storyName = 'Disabled + Focus'

export const DisabledFocusHover = () => ({
  template: hbs`
    <a href="#" class="pds--cta pds--disabled mock-focus mock-hover">
      CTA Link
    </a>
  `,
})
DisabledFocusHover.storyName = 'Disabled + Focus + Hover'

export const DisabledFocusActive = () => ({
  template: hbs`
    <a href="#" class="pds--cta pds--disabled mock-focus mock-active">
      CTA Link
    </a>
  `,
})
DisabledFocusActive.storyName = 'Disabled + Focus + Active'

export const DisabledFocusActiveHover = () => ({
  template: hbs`
    <a href="#" class="pds--cta pds--disabled mock-focus mock-active mock-hover">
      CTA Link
    </a>
  `,
})
DisabledFocusActiveHover.storyName = 'Disabled + Focus + Active + Hover'
