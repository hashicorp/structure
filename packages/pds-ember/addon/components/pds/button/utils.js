export const VARIANT_CLASSES = {
  ghost: 'pds--ghost',
  primary: 'pds--primary',
  secondary: '',
  warning: 'pds--warning',
};

export const DEFAULT_VARIANT = 'secondary';

export function getVariantClass(variant) {
  let result = '';

  if (VARIANT_CLASSES[variant]) {
    result = VARIANT_CLASSES[variant];
  }

  return result;
}
