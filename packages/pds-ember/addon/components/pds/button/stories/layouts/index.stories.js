import hbs from 'htmlbars-inline-precompile';
import { boolean } from '@storybook/addon-knobs';
import Parent from '../index.stories';

const CONFIG = {
  ...Parent,
  title: `${Parent.title} / Layouts`,
};

function getContext() {
  return {
    isCompact: boolean('@compact', false),
  }
}

const TextOnly = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
    >
      Text
    </Pds::Button>
  `,
  context: getContext(),
});

const IconOnly_ariaLabel = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @iconStart="test-icon"
      aria-label="Text"
    />
  `,
  context: getContext(),
});

const IconOnly_visuallyHidden_label = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @hideText={{true}}
      @iconStart="test-icon"
    >
      Text
    </Pds::Button>
  `,
  context: getContext(),
});

const TwoIcons_withoutBlock = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @iconEnd="test-icon"
      @iconStart="test-icon"
      aria-label="Text"
    />
  `,
  context: getContext(),
});

const TwoIcons_withBlock = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @hideText={{true}}
      @iconEnd="test-icon"
      @iconStart="test-icon"
    >
      Text
    </Pds::Button>
  `,
  context: getContext(),
});

const TextBeforeIcon = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @iconEnd="test-icon"
    >
      Text
    </Pds::Button>
  `,
  context: getContext(),
});

const TextAfterIcon = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @iconStart="test-icon"
    >
      Text
    </Pds::Button>
  `,
  context: getContext(),
});

const TextBetweenIcons = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @iconEnd="test-icon"
      @iconStart="test-icon"
    >
      Text
    </Pds::Button>
  `,
  context: getContext(),
});

IconOnly_ariaLabel.story = { name: 'Icon Only using [aria-label]' };
IconOnly_visuallyHidden_label.story = { name: 'Icon Only with visually-hidden label' };
TwoIcons_withoutBlock.story = { name: 'Two Icons without block' };
TwoIcons_withBlock.story = { name: 'Two Icon with block' };
TextBeforeIcon.story = { name: 'Label + Icon' };
TextAfterIcon.story = { name: 'Icon + Label' };
TextBetweenIcons.story = { name: 'Icon + Label + Icon' };

export {
  CONFIG as default,

  TextOnly,
  IconOnly_ariaLabel,
  IconOnly_visuallyHidden_label,
  TwoIcons_withoutBlock,
  TwoIcons_withBlock,
  TextBeforeIcon,
  TextAfterIcon,
  TextBetweenIcons,
}
