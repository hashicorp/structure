import hbs from 'htmlbars-inline-precompile';
import Parent from '../index.stories';

const CONFIG = {
  ...Parent,
  title: `${Parent.title} / States`,
};

const Enabled = () => ({
  template: hbs`
    <Docs::Button />
  `,
});

const Enabled_hovered = () => ({
  template: hbs`
    <Docs::Button
      @isHovered={{true}}
    />
  `,
});

const Enabled_focused = () => ({
  template: hbs`
    <Docs::Button
      @isFocused={{true}}
    />
  `,
});

const Enabled_focused_hovered = () => ({
  template: hbs`
    <Docs::Button
      @isFocused={{true}}
      @isHovered={{true}}
    />
  `,
});

const Enabled_focused_active = () => ({
  template: hbs`
    <Docs::Button
      @isActive={{true}}
      @isFocused={{true}}
    />
  `,
});

const Enabled_focused_active_hovered = () => ({
  template: hbs`
    <Docs::Button
      @isActive={{true}}
      @isFocused={{true}}
      @isHovered={{true}}
    />
  `,
});

const Disabled = () => ({
  template: hbs`
    <Docs::Button
      @disabled={{true}}
    />
  `,
});

const Disabled_hovered = () => ({
  template: hbs`
    <Docs::Button
      @isHovered={{true}}
      @disabled={{true}}
    />
  `,
});

const Disabled_focused = () => ({
  template: hbs`
    <Docs::Button
      @isFocused={{true}}
      @disabled={{true}}
    />
  `,
});

const Disabled_focused_hovered = () => ({
  template: hbs`
    <Docs::Button
      @isFocused={{true}}
      @isHovered={{true}}
      @disabled={{true}}
    />
  `,
});

Enabled.story = { name: ':enabled' };
Enabled_hovered.story = { name: ':enabled:hover' };
Enabled_focused.story = { name: ':enabled:focus' };
Enabled_focused_hovered.story = { name: ':enabled:focus:hover' };
Enabled_focused_active.story = { name: ':enabled:focus:active' };
Enabled_focused_active_hovered.story = { name: ':enabled:focus:active:hover' };
Disabled.story = { name: ':disabled' };
Disabled_hovered.story = { name: ':disabled:hover' };
Disabled_focused.story = { name: ':disabled:focus' };
Disabled_focused_hovered.story = { name: ':disabled:focus:hover' };

export {
  CONFIG as default,
  Enabled,
  Enabled_hovered,
  Enabled_focused,
  Enabled_focused_hovered,
  Enabled_focused_active,
  Enabled_focused_active_hovered,
  Disabled,
  Disabled_hovered,
  Disabled_focused,
  Disabled_focused_hovered,
};
