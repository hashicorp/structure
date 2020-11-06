import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE } from '../docs.mdx'

export default {
  title: TITLE,
  component: 'PdsTabNav',
  parameters: { docs: { page: DocsPage } },
}

export const Index = (args) => ({
  template: hbs`
    <Pds::TabNav>
      <a href="#" class="active">Tab 1</a>
      <a href="#">Tab 2</a>
      <a href="#">Tab 3</a>
      <a href="#">Tab 4</a>
      <a href="#" class="disabled">Tab 5</a>
    </Pds::TabNav>
  `,
  context: args,
})

export const States = (args) => ({
  template: hbs`
    <h2>Default</h2>
    <Pds::TabNav>
      <a href="#">Tab</a>
      <a href="#" class="disabled">Disabled</a>
      <a href="#">Tab</a>
      <a href="#" class="mock-hover">Hover</a>
      <a href="#">Tab</a>
      <a href="#" class="mock-focus">Focus</a>
      <a href="#">Tab</a>
      <a href="#" class="mock-focus mock-hover">Focus + Hover</a>
      <a href="#">Tab</a>
      <a href="#" class="mock-active">Active</a>
      <a href="#">Tab</a>
      <a href="#" class="mock-active mock-hover">Active + Hover</a>
    </Pds::TabNav>

    <br />

    <h2>Current</h2>
    <Pds::TabNav>
      <a href="#" class="active">Current</a>
      <a href="#">Tab</a>
      <a href="#" class="active mock-hover">Hover</a>
      <a href="#">Tab</a>
      <a href="#" class="active mock-focus">Focus</a>
      <a href="#">Tab</a>
      <a href="#" class="active mock-focus mock-hover">Focus + Hover</a>
      <a href="#">Tab</a>
      <a href="#" class="active mock-active">Active</a>
      <a href="#">Tab</a>
      <a href="#" class="active mock-active mock-hover">Active + Hover</a>
    </Pds::TabNav>
  `,
  context: args,
})
