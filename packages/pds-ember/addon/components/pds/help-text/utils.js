export const VARIANT_CLASSES = {
  bold: 'pds-helpText--bold',
  regular: '',
};

export const DEFAULT_VARIANT = 'regular';

export function getVariantClass(variant) {
  let result = '';

  if (VARIANT_CLASSES[variant]) {
    result = VARIANT_CLASSES[variant];
  }

  return result;
}
