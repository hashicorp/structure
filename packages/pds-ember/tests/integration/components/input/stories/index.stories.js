/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import hbs from 'htmlbars-inline-precompile';
import { withKnobs } from '@storybook/addon-knobs';
import DocsPage, { TITLE } from '../docs.mdx';
import { getContext } from './cfg';

const CONFIG = {
  title: TITLE,
  component: 'PdsInput',
  decorators: [withKnobs],
  parameters: { docs: { page: DocsPage } },
};

const Index = () => ({
  template: hbs`
    <Pds::Input
      @type={{type}}
      @invalid={{isInvalid}}
      class="
        {{if isFocused 'mock-focus'}}
        {{if isHovered 'mock-hover'}}
      "
      disabled={{isDisabled}}
      pds-dirty={{isDirty}}
      placeholder={{placeholder}}
      required={{isRequired}}
      value={{value}}
      checked={{isChecked}}
      src={{src}}
      alt={{alt}}
    />
  `,
  context: getContext(),
});

export { CONFIG as default, Index };
