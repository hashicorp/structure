import hbs from 'htmlbars-inline-precompile'
import DocsPage, { TITLE, SUBCOMPONENTS } from '../docs.mdx'

export default {
  title: `${TITLE} / States`,
  component: 'PdsGlobalHeader',
  subcomponents: SUBCOMPONENTS,
  parameters: { docs: { page: DocsPage } },
}

export const DropdownContent = () => ({
  template: hbs`
    <Pds::GlobalHeader as |H|>
      <H.Switcher @isOpen={{true}} as |M|>
        <M.Trigger>
          Switcher
        </M.Trigger>

        <M.Dialog>
          <section>
            <header>Header</header>
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
            <a href="#">Link Item</a>
            <M.ListItem>
              Multi-line, plain-text<br />
              List Item
            </M.ListItem>
            <a href="#">Link Item</a>
          </section>
        </M.Dialog>
      </H.Switcher>

      <H.UserMenu @isOpen={{true}} as |M|>
        <M.Trigger>
          <Pds::Avatar />
          <span class="pds--visuallyHidden">
            User Menu
          </span>
        </M.Trigger>

        <M.Dialog>
          <section>
            <header>User</header>
            <M.ListItem>
              Signed in as<br />
              <b>user@example.com</b>
            </M.ListItem>
          </section>

          <section>
            <Pds::Button>Button</Pds::Button>
            <Pds::Button class="mock-focus">
              Button (focus)
            </Pds::Button>
            <Pds::Button class="mock-hover">
              Button (hover)
            </Pds::Button>
            <Pds::Button class="mock-active">
              Button (active)
            </Pds::Button>
            <Pds::Button disabled>
              Button (disabled)
            </Pds::Button>
          </section>
        </M.Dialog>
      </H.UserMenu>
    </Pds::GlobalHeader>
  `,
})

export const DropdownTriggers = () => ({
  template: hbs`
    <h2>Default/Closed</h2>
    <Pds::GlobalHeader as |H|>
      <Pds::ButtonSet>
        <Pds::Dropdown as |D|>
          <D.Trigger @icon="menu" />
        </Pds::Dropdown>
        <H.Switcher as |S|>
          <S.Trigger>Trigger</S.Trigger>
        </H.Switcher>
        <H.UserMenu as |M|>
          <M.Trigger>
            <Pds::Avatar @src="User-Avatar.png" />
            <span class="pds--visuallyHidden">
              User Menu
            </span>
          </M.Trigger>
        </H.UserMenu>

        <Pds::Dropdown as |D|>
          <D.Trigger @icon="menu" class="mock-focus" />
        </Pds::Dropdown>
        <H.Switcher as |S|>
          <S.Trigger class="mock-focus">Focus</S.Trigger>
        </H.Switcher>
        <H.UserMenu as |M|>
          <M.Trigger class="mock-focus">
            <Pds::Avatar @src="User-Avatar.png" />
            <span class="pds--visuallyHidden">
              User Menu
            </span>
          </M.Trigger>
        </H.UserMenu>

        <Pds::Dropdown as |D|>
          <D.Trigger @icon="menu" class="mock-hover" />
        </Pds::Dropdown>
        <H.Switcher as |S|>
          <S.Trigger class="mock-hover">Hover</S.Trigger>
        </H.Switcher>
        <H.UserMenu as |M|>
          <M.Trigger class="mock-hover">
            <Pds::Avatar @src="User-Avatar.png" />
            <span class="pds--visuallyHidden">
              User Menu
            </span>
          </M.Trigger>
        </H.UserMenu>

        <Pds::Dropdown as |D|>
          <D.Trigger @icon="menu" class="mock-active" />
        </Pds::Dropdown>
        <H.Switcher as |S|>
          <S.Trigger class="mock-active">Active</S.Trigger>
        </H.Switcher>
        <H.UserMenu as |M|>
          <M.Trigger class="mock-active">
            <Pds::Avatar @src="User-Avatar.png" />
            <span class="pds--visuallyHidden">
              User Menu
            </span>
          </M.Trigger>
        </H.UserMenu>
      </Pds::ButtonSet>
    </Pds::GlobalHeader>

    <h2>Toggled/Open</h2>
    <Pds::GlobalHeader as |H|>
      <Pds::ButtonSet>
        <Pds::Dropdown open as |D|>
          <D.Trigger @icon="menu" />
        </Pds::Dropdown>
        <H.Switcher open as |S|>
          <S.Trigger>Trigger</S.Trigger>
        </H.Switcher>
        <H.UserMenu open as |M|>
          <M.Trigger>
            <Pds::Avatar @src="User-Avatar.png" />
            <span class="pds--visuallyHidden">
              User Menu
            </span>
          </M.Trigger>
        </H.UserMenu>

        <Pds::Dropdown open as |D|>
          <D.Trigger @icon="menu" class="mock-focus" />
        </Pds::Dropdown>
        <H.Switcher open as |S|>
          <S.Trigger class="mock-focus">Focus</S.Trigger>
        </H.Switcher>
        <H.UserMenu open as |M|>
          <M.Trigger class="mock-focus">
            <Pds::Avatar @src="User-Avatar.png" />
            <span class="pds--visuallyHidden">
              User Menu
            </span>
          </M.Trigger>
        </H.UserMenu>

        <Pds::Dropdown open as |D|>
          <D.Trigger @icon="menu" class="mock-hover" />
        </Pds::Dropdown>
        <H.Switcher open as |S|>
          <S.Trigger class="mock-hover">Hover</S.Trigger>
        </H.Switcher>
        <H.UserMenu open as |M|>
          <M.Trigger class="mock-hover">
            <Pds::Avatar @src="User-Avatar.png" />
            <span class="pds--visuallyHidden">
              User Menu
            </span>
          </M.Trigger>
        </H.UserMenu>

        <Pds::Dropdown open as |D|>
          <D.Trigger @icon="menu" class="mock-active" />
        </Pds::Dropdown>
        <H.Switcher open as |S|>
          <S.Trigger class="mock-active">Active</S.Trigger>
        </H.Switcher>
        <H.UserMenu open as |M|>
          <M.Trigger class="mock-active">
            <Pds::Avatar @src="User-Avatar.png" />
            <span class="pds--visuallyHidden">
              User Menu
            </span>
          </M.Trigger>
        </H.UserMenu>
      </Pds::ButtonSet>
    </Pds::GlobalHeader>
  `,
})

export const Nav = () => ({
  template: hbs`
    <h2>Default</h2>
    <Pds::GlobalHeader>
      <Pds::GlobalHeader::Nav>
        <a href="#">Link</a>
        <a href="#" class="mock-focus">Focus</a>
        <a href="#" class="mock-hover">Hover</a>
        <a href="#" class="mock-active">Active</a>
      </Pds::GlobalHeader::Nav>
    </Pds::GlobalHeader>

    <h2>Current</h2>
    <Pds::GlobalHeader>
      <Pds::GlobalHeader::Nav>
        <a href="#" class="active">Link</a>
        <a href="#" class="active mock-focus">Focus</a>
        <a href="#" class="active mock-hover">Hover</a>
        <a href="#" class="active mock-active">Active</a>
      </Pds::GlobalHeader::Nav>
    </Pds::GlobalHeader>
  `,
})
