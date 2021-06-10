import { boolean, select, text } from '@storybook/addon-knobs';
import DEFAULTS from './_defaults';
import { isTextLike } from '@hashicorp/pds-ember/addon/components/pds/input/utils';

// default knob group
const groupID = 'config';

const TYPES = Object.keys(DEFAULTS).sort();

function getCommonContext() {
  let _id = groupID;
  let knobs = {
    isRequired: boolean('[required]', false, _id),
    isDisabled: boolean('[disabled]', false, _id),
    isFocused:  boolean(':focus', false, _id),
    isHovered:  boolean(':hover', false, _id),
    isInvalid:  boolean('visually "invalid"', false, _id),
    isDirty: boolean('dirty', false, _id),
  };
  return knobs;
}

// This is likely to evolve as more input types are supported via Ember components.
function getContextForType(ilk) {
  let _default = DEFAULTS[ilk];
  let optsID = `${ilk} Options`; // type-specific knob group
  let knobs = {
    value: text('[value]', _default.value, optsID),
  };

  if (isTextLike(ilk)) {
    knobs.placeholder = text('[placeholder]', _default.placeholder, optsID);
  }

  switch (ilk) {
    case 'checkbox':
      // fall through
    case 'radio':
      knobs.isChecked = boolean('[checked]', _default.checked, optsID);
      break;

    case 'image':
      knobs.src = text('[src]', _default.src, optsID);
      knobs.alt = text('[alt]', _default.alt, optsID);
      break;
  }

  return knobs;
}

function getContext() {
  let _type = select('[type]', TYPES, 'text', groupID);

  let ctx = {
    "type": _type,
    ...getCommonContext(),
    ...getContextForType(_type),
  };

  return ctx;
}

export {
  DEFAULTS,
  TYPES,
  getCommonContext,
  getContext,
  groupID,
  getContextForType,
}
