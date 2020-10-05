export const INVALID_ARGS = [
  {},
  { value: 'foo' },
]

export const INVALID_OPTIONS_ARGS = [
  {},
  false,
  null,
  undefined,
  42,
  /.*/i,
]

export const INVALID_OPTIONS_VALUES = [
  '',
  ' ',
  /.*/i,
  [],
  null,
  undefined,
  {},
  { label: 'foo' },
  { foo: 'bar' },
]

export const VALID_OPTIONS_VALUES = [
  42,
  12.5,
  'string',
  { value: 100 },
  { value: 9001, label: 'Over 9000!' },
  { value: '', label: '' },
]

// [ input, output ]
// input {object} - "args"
// output {array} - normalized options [ { label, value, selected }, ... ]
export const VALID_ARGS_OPTIONS = [
  // empty args.options (technically valid, but not very useful)
  [
    // args
    { options: [] },
    // expected options,
    [],
  ],

  // number options
  [
    // args
    {
      options: [1, 2, 3],
    },
    // expected options
    [
      { value: 1, label: 1, selected: false },
      { value: 2, label: 2, selected: false },
      { value: 3, label: 3, selected: false },
    ]
  ],

  // number options, with matching number args.value
  [
    // args
    {
      value: 2,
      options: [1, 2, 3],
    },
    // expected options
    [
      { value: 1, label: 1, selected: false },
      { value: 2, label: 2, selected: true },
      { value: 3, label: 3, selected: false },
    ]
  ],

  // number options, with non-matching integer args.value
  [
    // args
    {
      value: 42,
      options: [1, 2, 3],
    },
    // expected options
    [
      { value: 1, label: 1, selected: false },
      { value: 2, label: 2, selected: false },
      { value: 3, label: 3, selected: false },
    ]
  ],

  // number options, with matching float args.value
  [
    // args
    {
      value: 2.0,
      options: [1, 2, 3],
    },
    // expected options
    [
      { value: 1, label: 1, selected: false },
      { value: 2, label: 2, selected: true },
      { value: 3, label: 3, selected: false },
    ]
  ],

  // number options, with non-matching numeric string args.value
  [
    // args
    {
      value: '2',
      options: [1, 2, 3],
    },
    // expected options
    [
      { value: 1, label: 1, selected: false },
      { value: 2, label: 2, selected: false },
      { value: 3, label: 3, selected: false },
    ]
  ],

  // object-literal options, with non-matching args.value
  [
    // args
    {
      value: 'foo',
      options: [
        { value: 'bar' },
        { value: 'fizz', label: 'buzz' },
      ],
    },
    // expected options
    [
      { value: 'bar',  label: 'bar',  selected: false },
      { value: 'fizz', label: 'buzz', selected: false },
    ],
  ],

  // object-literal options, with matching args.value
  [
    // args
    {
      value: 'fizz',
      options: [
        { value: 'bar' },
        { value: 'fizz', label: 'buzz' },
      ],
    },
    // expected options
    [
      { value: 'bar',  label: 'bar',  selected: false },
      { value: 'fizz', label: 'buzz', selected: true },
    ]
  ],
]


// [value, isValid]
export const TEST_VALID_OPTIONS = [
  [ {}, false ],
  [ { foo: 'bar' }, false ],
  [ { value: 'bar' }, true ],
  [ /.*/i, false ],
  [ [], false ],
  [ null, false ],
  [ undefined, false ],
]
