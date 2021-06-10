import hbs from 'htmlbars-inline-precompile';
import Parent from './index.stories';

const CONFIG = {
  ...Parent,
  title: `${Parent.title} / Disabled / Required`,
};

/// "clean" (a.k.a., "pristine")
const clean_blurred = () => hbs`
  <Docs::Input
    @isDisabled={{true}}
    @isRequired={{true}}
  />
`;
const clean_hovered = () => hbs`
  <Docs::Input
    @isDisabled={{true}}
    @isHovered={{true}}
    @isRequired={{true}}
  />
`;
const clean_focused = () => hbs`
  <Docs::Input
    @isDisabled={{true}}
    @isFocused={{true}}
    @isRequired={{true}}
  />
`;
const clean_focused_hovered = () => hbs`
  <Docs::Input
    @isDisabled={{true}}
    @isFocused={{true}}
    @isHovered={{true}}
    @isRequired={{true}}
  />
`;

/// "dirty"
const dirty_blurred = () => hbs`
  <Docs::Input
    @isDirty={{true}}
    @isDisabled={{true}}
    @isRequired={{true}}
  />
`;
const dirty_hovered = () => hbs`
  <Docs::Input
    @isDirty={{true}}
    @isDisabled={{true}}
    @isHovered={{true}}
    @isRequired={{true}}
  />
`;
const dirty_focused = () => hbs`
  <Docs::Input
    @isDirty={{true}}
    @isDisabled={{true}}
    @isFocused={{true}}
    @isRequired={{true}}
  />
`;
const dirty_focused_hovered = () => hbs`
  <Docs::Input
    @isDirty={{true}}
    @isDisabled={{true}}
    @isFocused={{true}}
    @isHovered={{true}}
    @isRequired={{true}}
  />
`;

/// ------------------------------------------------------------ ///
/// Story Metadata
/// ------------------------------------------------------------ ///
clean_blurred.story = { name: '(clean) blurred' };
clean_hovered.story = { name: '(clean) :hover' };
clean_focused.story = { name: '(clean) :focus' };
clean_focused_hovered.story = { name: '(clean) :focus:hover' };

dirty_blurred.story = { name: '(dirty) blurred' };
dirty_hovered.story = { name: '(dirty) :hover' };
dirty_focused.story = { name: '(dirty) :focus' };
dirty_focused_hovered.story = { name: '(dirty) :focus:hover' };

// stories module exports
export {
  CONFIG as default,

  clean_blurred,
  clean_hovered,
  clean_focused,
  clean_focused_hovered,

  dirty_blurred,
  dirty_hovered,
  dirty_focused,
  dirty_focused_hovered,
};
