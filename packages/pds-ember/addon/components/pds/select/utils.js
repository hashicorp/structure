import { isArray } from '@ember/array'
import { isPresent, typeOf } from '@ember/utils'

/**
 * Callback function to pass to Array.prototype.filter, in order
 * to weed out unusable options.
 *
 * @function
 * @param {*} item
 * @return {boolean}
 */
export function isValidOption(item) {
  // exclude empty values (null, undefined, '', {}, [], etc.)
  if (!isPresent(item)) {
    return false
  }

  // included by default
  let result = true

  // exclusions
  switch(typeOf(item)) {
    // exclude object literals without `value` prop
    case 'object':
      result = item.hasOwnProperty('value')
      break

    // exclude regular expressions
    case 'regexp':
      result = false
      break
  }

  return result
}

/**
 * Uses component args to generate a normalized array of option values
 * for use in the component template.
 *
 * @function
 * @param {object} args
 * @param {*} [args.value] - value of selected option
 * @param {*} [args.options] - list of options (flexible, but expects array)
 * @return {array}
 */
export function normalizeOptions(args) {
  let { options, value } = args
  let result = []

  if (isArray(options)) {
    result = options
      // exclude invalid/malformed options
      .filter(isValidOption)
      // normalize to { value, label, selected }
      .map(item => {
        let itemValue = item.value ?? item
        return {
          value: itemValue,
          label: (item.label ?? itemValue),
          selected: (itemValue === value),
        }
      })
  }

  return result
}
