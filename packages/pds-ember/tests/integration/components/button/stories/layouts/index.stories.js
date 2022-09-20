import hbs from 'htmlbars-inline-precompile';
import { boolean } from '@storybook/addon-knobs';
import Parent from '../index.stories';

export default {
  ...Parent,
  title: `${Parent.title} / Layouts`,
};

function getContext() {
  return {
    isCompact: boolean('@compact', false),
  };
}

export const TextOnly = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
    >
      Text
    </Pds::Button>
  `,
  context: getContext(),
});

export const IconOnly_ariaLabel = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @iconStart="docs-link"
      aria-label="Text"
    />
  `,
  context: getContext(),
});
IconOnly_ariaLabel.storyName = 'Icon Only using [aria-label]';

export const IconOnly_visuallyHidden_label = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @hideText={{true}}
      @iconStart="docs-link"
    >
      Text
    </Pds::Button>
  `,
  context: getContext(),
});
IconOnly_visuallyHidden_label.storyName =
  'Icon Only with visually-hidden label';

export const TwoIcons_withoutBlock = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @iconEnd="docs-link"
      @iconStart="docs-link"
      aria-label="Text"
    />
  `,
  context: getContext(),
});
TwoIcons_withoutBlock.storyName = 'Two Icons without block';

export const TwoIcons_withBlock = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @hideText={{true}}
      @iconEnd="docs-link"
      @iconStart="docs-link"
    >
      Text
    </Pds::Button>
  `,
  context: getContext(),
});
TwoIcons_withBlock.storyName = 'Two Icons with block';

export const TextBeforeIcon = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @iconEnd="docs-link"
    >
      Text
    </Pds::Button>
  `,
  context: getContext(),
});
TextBeforeIcon.storyName = 'Label + Icon';

export const TextAfterIcon = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @iconStart="docs-link"
    >
      Text
    </Pds::Button>
  `,
  context: getContext(),
});
TextAfterIcon.storyName = 'Icon + Label';

export const TextBetweenIcons = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @iconEnd="docs-link"
      @iconStart="docs-link"
    >
      Text
    </Pds::Button>
  `,
  context: getContext(),
});
TextBetweenIcons.storyName = 'Icon + Label + Icon';

export const LengthyContent = () => ({
  template: hbs`
    <Pds::Button
      @compact={{isCompact}}
      @iconEnd="docs-link"
      @iconStart="docs-link"
    >
      Text with lengthy content.
      The quick brown fox jumps over the lazy dog.
      The quick brown fox jumps over the lazy dog.
      The quick brown fox jumps over the lazy dog.
      The quick brown fox jumps over the lazy dog.
      The quick brown fox jumps over the lazy dog.
      The quick brown fox jumps over the lazy dog.
      The quick brown fox jumps over the lazy dog.
      The quick brown fox jumps over the lazy dog.
    </Pds::Button>
  `,
  context: getContext(),
});
