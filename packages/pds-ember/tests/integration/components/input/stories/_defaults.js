/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const button = {
  value: 'button',
};

const color = {
  value: '#00ff00',
};

const checkbox = {
  value: 'yes',
};

const date = {
  value: '1939-11-01',
  placeholder: 'YYYY-MM-DD',
};

const datetimeLocal = {
  value: '1939-11-01T17:45',
  placeholder: 'YYYY-MM-DDTHH:mm', // only applies on fallback
};

const email = {
  value: 'bruce@wayne.co',
  placeholder: 'you@example.com',
};

const file = {
  value: '',
};

const hidden = {
  value: "You can't see me!",
};

const image = {
  src: '',
  alt: 'image input',
};

const month = {
  value: '1939-11',
  placeholder: 'YYYY-MM', // only applies on fallback
};

// might need to underscore
const number = {
  value: '42',
  placeholder: '0',
};

const password = {
  value: 'dc-1139',
  placeholder: 'password',
};

const radio = {
  value: 'yes',
};

const range = {
  value: '42',
};

const reset = {
  value: 'reset',
};

const search = {
  value: 'utility belt',
  placeholder: 'search...',
};

const submit = {
  value: 'submit',
};

const text = {
  value: 'Batman',
  placeholder: 'alter ego',
};

const time = {
  value: '17:45',
  placeholder: 'HH:mm', // only applies on fallback
};

const tel = {
  value: '867-5309',
  placeholder: '123-4567',
};

const url = {
  value: 'https://wayne.co',
  placeholder: 'https://example.com',
};

const week = {
  value: '2020-W33',
  placeholder: 'YYYY-Www', // only applies on fallback
};

export default {
  button,
  checkbox,
  color,
  date,
  'datetime-local': datetimeLocal,
  email,
  file,
  hidden,
  image,
  month,
  number,
  password,
  radio,
  range,
  reset,
  search,
  submit,
  tel,
  text,
  time,
  url,
  week,
};
