/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { boolean, select, text } from '@storybook/addon-knobs';
import * as Input from '../../input/stories/cfg';

const { groupID } = Input;

function getFieldContext() {
  let _id = groupID;
  let ctx = {
    errorMessage: text('Error Message', '', _id),
    helpText: text('Help Text', '', _id),
    hideLabel: boolean('Hide Label?', false, _id),
  };
  return ctx;
}

function getContext() {
  let _type = select('[type]', Input.TYPES, 'text', groupID);
  let ctx = {
    type: _type,
    ...Input.getCommonContext(),
    ...getFieldContext(),
    ...Input.getContextForType(_type),
  };
  return ctx;
}

export { getContext, getFieldContext, groupID };
