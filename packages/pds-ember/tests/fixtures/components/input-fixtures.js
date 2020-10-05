export const VALID_TEXT_LIKE = [
  'date',
  'datetime',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week',
]

export const VALID_BUTTON_LIKE = [
  'button',
  'reset',
  'submit',
]

export const VALID_OTHER = [
  'checkbox',
  'color',
  'radio',
  'range',
]

export const TYPE_CLASSES = {
  'button': 'pds-button',
  'checkbox': 'pds--checkboxLike',
  'color': 'pds--colorLike',
  'date': 'pds--textLike',
  'datetime': 'pds--textLike',
  'datetime-local': 'pds--textLike',
  'email': 'pds--textLike',
  'month': 'pds--textLike',
  'number': 'pds--textLike',
  'password': 'pds--textLike',
  'radio': 'pds--radioLike',
  'range': 'pds--rangeLike',
  'reset': 'pds-button',
  'search': 'pds--textLike',
  'submit': 'pds-button',
  'tel': 'pds--textLike',
  'text': 'pds--textLike',
  'time': 'pds--textLike',
  'url': 'pds--textLike',
  'week': 'pds--textLike',
  'dne': '',
}

export const VALID_NON_TEXT_LIKE = [
  ...VALID_BUTTON_LIKE,
  ...VALID_OTHER,
]

export const VALID = [
  ...VALID_TEXT_LIKE,
  ...VALID_NON_TEXT_LIKE,
]

export const INVALID = [
  null,
  undefined,
  [ 'array literal' ],
  Array.of( 'Array.of' ),
  { comment: 'Object literal' },
  Object.create({}),
  { foo: 'bar' },
  '', // empty string
  ' ', // blank string
  true,
  false,
  -1,
  0,
  1,
  function noop() {},
  /RegExpLiteral/i,
  new RegExp(/RegExpNew/i),
]
