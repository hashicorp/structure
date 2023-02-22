/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import hbs from 'htmlbars-inline-precompile';
import { withKnobs } from '@storybook/addon-knobs';
import DocsPage, { TITLE } from '../docs.mdx';

const CONFIG = {
  title: `${TITLE} / Options`,
  component: 'PdsSelect',
  decorators: [withKnobs],
  parameters: { docs: { page: DocsPage } },
};

const AutoOptions_string = () => ({
  template: hbs`
    <Pds::Select
      @options={{options}}
      @value={{value}}
    />
  `,
  context: {
    value: 'String B',
    options: ['String A', 'String B', 'String C', 'String D'],
  },
});

const AutoOptions_number = () => ({
  template: hbs`
    <Pds::Select
      @options={{options}}
      @value={{value}}
    />
  `,
  context: {
    value: 3,
    options: [1, 2, 3, 4, 5],
  },
});

const AutoOptions_object = () => ({
  template: hbs`
    <Pds::Select
      @options={{options}}
      @value={{value}}
    />
  `,
  context: {
    value: 2,
    options: [
      { label: 'Object 1', value: 1 },
      { label: 'Object 2', value: 2 },
      { label: 'Object 3', value: 3 },
    ],
  },
});

const AutoOptions_boolean = () => ({
  template: hbs`
    <Pds::Select
      @options={{options}}
      @value={{value}}
    />
  `,
  context: {
    value: false,
    options: [true, false],
  },
});

const AutoOptions_mixed = () => ({
  template: hbs`
    <Pds::Select
      @options={{options}}
      @value={{value}}
    />
  `,
  context: {
    value: 'B',
    options: [
      { label: '', value: '' },
      { label: 'Object A', value: 'A' },
      { label: 'Object B', value: 'B' },
      null,
      undefined,
      '',
      '  ',
      'String 1',
      'String 2',
      true,
      false,
      42,
      101,
    ],
  },
});

const ManualOptions_simple = () => ({
  template: hbs`
    <Pds::Select>
      <option>January</option>
      <option>February</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option selected>July</option>
      <option>August</option>
      <option>September</option>
      <option>October</option>
      <option>November</option>
      <option>December</option>
    </Pds::Select>
  `,
});

const ManualOptions_grouped = () => ({
  template: hbs`
    <Pds::Select>
      <optgroup label="Beatles">
        <option selected>John</option>
        <option>Ringo</option>
        <option>Paul</option>
        <option>George</option>
      </optgroup>
      <optgroup label="Colors">
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </optgroup>
    </Pds::Select>
  `,
});

AutoOptions_string.story = { name: 'Auto / String Options' };
AutoOptions_number.story = { name: 'Auto / Number Options' };
AutoOptions_object.story = { name: 'Auto / Object Options' };
AutoOptions_boolean.story = { name: 'Auto / Boolean Options' };
AutoOptions_mixed.story = { name: 'Auto / Mixed Options' };

ManualOptions_simple.story = { name: 'Manual / Simple' };
ManualOptions_grouped.story = { name: 'Manual / Grouped' };

export {
  CONFIG as default,
  AutoOptions_string,
  AutoOptions_number,
  AutoOptions_object,
  AutoOptions_boolean,
  AutoOptions_mixed,
  ManualOptions_simple,
  ManualOptions_grouped,
};
