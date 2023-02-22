/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/**
 * Convert value to a string for use in module, test, and assertion descriptions.
 *
 * @param {*} val - primitive or complex value
 * @returns {string} - human-readable string representation of given value
 */
export function stringify(val) {
  // handles most cases
  let result = JSON.stringify(val);

  // exceptions...

  // JSON.stringify turns functions into "undefined"
  if (typeof val === 'function') {
    result = val.toString();
  }

  // JSON.stringify turns regular expressions into "{}"
  if (val instanceof RegExp) {
    result = val.toString();
  }

  return result;
}
