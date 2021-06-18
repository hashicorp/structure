import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: `${TITLE} / Patterns`,
  component: 'PdsDropdown',
  parameters: { docs: { page: DocsPage } },
};

export const NavList = (args) => ({
  template: hbs`
    <Pds::Dropdown @isOpen={{true}} as |M|>
      <M.Trigger>
        Nav List
      </M.Trigger>

      <M.Dialog>
        <section>
          <a href="#">Link</a>
          <a href="#" class="mock-focus">
            Link (focus)
          </a>
          <a href="#" class="mock-hover">
            Link (hover)
          </a>
          <a href="#" class="mock-active">
            Link (active)
          </a>
          <a href="#" class="pds--disabled">
            Link (disabled)
          </a>
        </section>

        <section>
          <header>Header</header>
          <a href="#">Link Item</a>
          <a href="#">Link Item</a>
        </section>
      </M.Dialog>
    </Pds::Dropdown>
  `,
  context: args,
});

export const Menu = (args) => ({
  template: hbs`
    <Pds::Dropdown @isOpen={{true}} as |M|>
      <M.Trigger>
        Menu
      </M.Trigger>

      <M.Dialog role="menu">
        <section>
          <Pds::Button role="menuitem">
            Menu Item
          </Pds::Button>
          <Pds::Button role="menuitem" class="mock-focus">
            Menu Item (focus)
          </Pds::Button>
          <Pds::Button role="menuitem" class="mock-hover">
            Menu Item (hover)
          </Pds::Button>
          <Pds::Button role="menuitem" class="mock-active">
            Menu Item (active)
          </Pds::Button>
          <Pds::Button role="menuitem" disabled>
            Menu Item (disabled)
          </Pds::Button>
        </section>

        <section>
          <header>Header</header>
          <Pds::Button role="menuitem">
            Menu Item
          </Pds::Button>
          <Pds::Button role="menuitem">
            Menu Item
          </Pds::Button>
        </section>
      </M.Dialog>
    </Pds::Dropdown>
  `,
  context: args,
});

export const MixedContent = (args) => ({
  template: hbs`
    <Pds::Dropdown @isOpen={{true}} as |M|>
      <M.Trigger>
        Mixed Content
      </M.Trigger>

      <M.Dialog>
        <section>
          <a href="#">
            Link list item
          </a>
          <M.ListItem>
            Plain-text list item
          </M.ListItem>
          <Pds::Button>
            Button list item
          </Pds::Button>
        </section>

        <section>
          <header>Header</header>
          <a href="#">
            Link list item
          </a>
          <M.ListItem>
            Multi-line<br />
            plain-text list item
          </M.ListItem>
          <Pds::Button>
            Button list item
          </Pds::Button>

          {{! manual divider }}
          <hr />

          <Pds::Button>
            Button
          </Pds::Button>
        </section>
      </M.Dialog>
    </Pds::Dropdown>
  `,
  context: args,
});
