import { warn } from '@ember/debug';

export const TYPES = {
  button: { like: 'button' },
  checkbox: { like: 'checkbox' },
  color: { like: 'color' },
  date: { like: 'text' },
  datetime: { like: 'text', obsolete: true },
  'datetime-local': { like: 'text' },
  email: { like: 'text' },
  file: { like: 'file' },
  month: { like: 'text' },
  number: { like: 'text' },
  password: { like: 'text' },
  radio: { like: 'radio' },
  range: { like: 'range' },
  reset: { like: 'button' },
  search: { like: 'text' },
  submit: { like: 'button' },
  tel: { like: 'text' },
  text: { like: 'text' },
  time: { like: 'text' },
  url: { like: 'text' },
  week: { like: 'text' },
};

/**
 * Check if given type is a valid input[type] value.
 *
 * @function
 * @param {string} type - input[type] value
 * @return {boolean}
 */
export function isValidType(type) {
  let result = false;

  if (typeof type === 'string') {
    result = !!TYPES[type];
  }

  return result;
}

/**
 * Used to ensure that a generated <input /> ALWAYS has a valid [type] attr defined.
 *
 * @function
 * @param {*} type - potential input type
 * @return {string} - non-null input type
 */
export function getValidType(type) {
  let _default = 'text';
  let _isValid = isValidType(type);

  let result = _isValid ? type : _default;

  warn(
    `[Pds::Input] invalid @type (${JSON.stringify(
      type
    )}); defaulting to "${_default}"`,
    _isValid,
    { id: 'ember-debug.pds.input.invalid-type' }
  );

  return result;
}

/**
 * Returns true if input type is text-like in appearance.
 *
 * @function
 * @param {string} type - input[type] value
 * @return {boolean}
 */
export function isTextLike(type) {
  let result = false;

  if (isValidType(type) && TYPES[type].like === 'text') {
    result = true;
  }

  return result;
}

/**
 * Get CSS class name for given type.
 *
 * @function
 * @param {string} type - input[type] value
 * @return {string}
 */
export function cssClassForType(type) {
  let result = '';

  if (isValidType(type)) {
    let { like } = TYPES[type];

    if (like === 'button') {
      result = 'pds-button';
    } else {
      result = `pds--${like}Like`;
    }
  }

  return result;
}
