import hbs from 'htmlbars-inline-precompile';
import icons from '@hashicorp/structure-icons/dist/index';
import {
  withKnobs,
  boolean,
  select,
  text,
  radios,
} from '@storybook/addon-knobs';
import DocsPage, { TITLE } from '../docs.mdx';

import { DEFAULT_VARIANT, VARIANT_CLASSES } from '@hashicorp/pds-ember/addon/components/pds/button/utils';

const VARIANTS = Object.keys(VARIANT_CLASSES);

const icons_with_blank = ['', ...icons];
const BUTTON_LIKE_TYPES = ['button', 'reset', 'submit'];

const CONFIG = {
  title: TITLE,
  component: 'PdsButton',
  decorators: [withKnobs],
  parameters: { docs: { page: DocsPage } },
};

const Index = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @hideText={{isTextHidden}}
      @iconEnd={{iconEnd}}
      @iconStart={{iconStart}}
      @variant={{variant}}
      class="
        {{if isFocused 'mock-focus'}}
        {{if isHovered 'mock-hover'}}
        {{if isPressed 'mock-active'}}
      "
      disabled={{isDisabled}}
    >
      {{name}}
    </Pds::Button>
  `,
  context: {
    variant: radios('@variant', VARIANTS, DEFAULT_VARIANT),
    name: text('text', 'Button'),
    isTextHidden: boolean('@hideText', false),
    isCompact: boolean('@compact', false),
    iconStart: select('@iconStart', icons_with_blank, ''),
    iconEnd: select('@iconEnd', icons_with_blank, ''),
    isHovered: boolean(':hover', false),
    isFocused: boolean(':focus', false),
    isPressed: boolean(':active', false),
    isDisabled: boolean(':disabled', false),
  },
});

const ButtonLike_Input = () => ({
  template: hbs`
    <Pds::Input
      @type={{type}}
      class="
        {{variantClass}}
        {{if isCompact 'pds--compact'}}
        {{if isFocused 'mock-focus'}}
        {{if isHovered 'mock-hover'}}
        {{if isPressed 'mock-active'}}
      "
      disabled={{isDisabled}}
      value={{type}}
    />
  `,
  context: {
    type: radios('@type', BUTTON_LIKE_TYPES, 'button'),
    variantClass: radios(
      'variant',
      VARIANT_CLASSES,
      VARIANT_CLASSES[DEFAULT_VARIANT]
    ),
    isCompact: boolean('compact?', false),
    isHovered: boolean(':hover', false),
    isFocused: boolean(':focus', false),
    isPressed: boolean(':active', false),
    isDisabled: boolean(':disabled', false),
  },
});

ButtonLike_Input.story = { name: 'Button-like Input' };

export { CONFIG as default, Index, ButtonLike_Input };
