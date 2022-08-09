import hbs from 'htmlbars-inline-precompile';
import DocsPage, { TITLE } from '../docs.mdx';

export default {
  title: `${TITLE} / States`,
  component: 'PdsGlobalHeader',
  parameters: { docs: { page: DocsPage } },
};

export const DropdownContent = () => ({
  template: hbs`
    <Pds::GlobalHeader>
      <:switcher>
        <Pds::Dropdown @isOpen={{true}} as |M|>
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
        </Pds::Dropdown>
      </:switcher>

      <:user-menu>
        <Pds::Dropdown @align="right" @isOpen={{true}} as |M|>
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
        </Pds::Dropdown>
      </:user-menu>
    </Pds::GlobalHeader>
  `,
});

export const DropdownTriggers = () => ({
  template: hbs`
    <h2>Default/Closed</h2>
    <Pds::GlobalHeader>
      <:extra>
        <Pds::Dropdown as |D|>
          <D.Trigger @icon="menu" />
        </Pds::Dropdown>
        <Pds::Dropdown as |D|>
          <D.Trigger @icon="menu" class="mock-focus" />
        </Pds::Dropdown>
        <Pds::Dropdown as |D|>
          <D.Trigger @icon="menu" class="mock-hover" />
        </Pds::Dropdown>
        <Pds::Dropdown as |D|>
          <D.Trigger @icon="menu" class="mock-active" />
        </Pds::Dropdown>
      </:extra>

       <:switcher>
        <Pds::Dropdown as |S|>
          <S.Trigger>Trigger</S.Trigger>
        </Pds::Dropdown>
        <Pds::Dropdown as |S|>
          <S.Trigger class="mock-focus">Focus</S.Trigger>
        </Pds::Dropdown>
        <Pds::Dropdown as |S|>
          <S.Trigger class="mock-hover">Hover</S.Trigger>
        </Pds::Dropdown>
        <Pds::Dropdown as |S|>
          <S.Trigger class="mock-active">Active</S.Trigger>
        </Pds::Dropdown>
       </:switcher>

       <:user-menu>
        <Pds::Dropdown @align="right" as |M|>
          <M.Trigger>
            <Pds::Avatar @src="User-Avatar.png" />
            <span class="pds--visuallyHidden">
              User Menu
            </span>
          </M.Trigger>
        </Pds::Dropdown>
        <Pds::Dropdown @align="right" as |M|>
          <M.Trigger class="mock-focus">
            <Pds::Avatar @src="User-Avatar.png" />
            <span class="pds--visuallyHidden">
              User Menu
            </span>
          </M.Trigger>
        </Pds::Dropdown>
        <Pds::Dropdown @align="right" as |M|>
          <M.Trigger class="mock-hover">
            <Pds::Avatar @src="User-Avatar.png" />
            <span class="pds--visuallyHidden">
              User Menu
            </span>
          </M.Trigger>
        </Pds::Dropdown>
        <Pds::Dropdown @align="right" as |M|>
          <M.Trigger class="mock-active">
            <Pds::Avatar @src="User-Avatar.png" />
            <span class="pds--visuallyHidden">
              User Menu
            </span>
          </M.Trigger>
        </Pds::Dropdown>
       </:user-menu>
    </Pds::GlobalHeader>

    <h2>Toggled/Open</h2>
    <Pds::GlobalHeader>
      <:extra>
        {{#each (array '' 'mock-focus' 'mock-hover' 'mock-active') as |triggerClass|}}
          <Pds::Dropdown open as |D|>
            <D.Trigger @icon="menu" class={{triggerClass}} />
          </Pds::Dropdown>
        {{/each}}
      </:extra>

      <:switcher>
        {{#each-in (hash Trigger='' Focus='mock-focus' Hover='mock-hover' Active='mock-active') as |triggerLabel triggerClass|}}
          <Pds::Dropdown open as |S|>
            <S.Trigger class={{triggerClass}}>{{triggerLabel}}</S.Trigger>
          </Pds::Dropdown>
        {{/each-in}}
      </:switcher>

      <:user-menu>
        {{#each (array '' 'mock-focus' 'mock-hover' 'mock-active') as |triggerClass|}}
          <Pds::Dropdown @align="right" open as |M|>
            <M.Trigger class={{triggerClass}}>
              <Pds::Avatar @src="User-Avatar.png" />
              <span class="pds--visuallyHidden">
                User Menu
              </span>
            </M.Trigger>
          </Pds::Dropdown>
        {{/each}}
      </:user-menu>

    </Pds::GlobalHeader>
  `,
});

export const Nav = () => ({
  template: hbs`
    <h2>Default</h2>
    <Pds::GlobalHeader>
      <:primary-nav>
        <a href="#">Link</a>
        <a href="#" class="mock-focus">Focus</a>
        <a href="#" class="mock-hover">Hover</a>
        <a href="#" class="mock-active">Active</a>
      </:primary-nav>
    </Pds::GlobalHeader>

    <h2>Current</h2>
    <Pds::GlobalHeader>
      <:primary-nav>
        <a href="#" class="active">Link</a>
        <a href="#" class="active mock-focus">Focus</a>
        <a href="#" class="active mock-hover">Hover</a>
        <a href="#" class="active mock-active">Active</a>
      </:primary-nav>
    </Pds::GlobalHeader>
  `,
});
