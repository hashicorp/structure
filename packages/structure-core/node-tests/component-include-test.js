'use strict';

const ComponentInclude = require('../lib/component-include');
var expect = require('chai').expect;
const { createBuilder, createTempDir } = require('broccoli-test-helper');

describe('Component Include', function () {
  it('should build', async function () {
    const input = await createTempDir();
    try {
      const subject = new ComponentInclude([input.path()]);
      const output = createBuilder(subject);
      try {
        // INITIAL
        input.write({
          'a.scss': 'A',
          'b.scss': 'B',
          'c.scss': 'C',
        });
        await output.build();

        expect(output.read()).to.deep.equal({
          'components.scss': "@forward 'a';\n@forward 'b';\n@forward 'c';",
        });

        // UPDATE
        input.write({
          'a.scss': 'A',
          'b.scss': null,
          'c.scss': 'C',
        });
        await output.build();

        expect(output.read()).to.deep.equal({
          'components.scss': "@forward 'a';\n@forward 'c';",
        });

        // NOOP
        await output.build();

        expect(output.changes()).to.deep.equal({});
      } finally {
        await output.dispose();
      }
    } finally {
      await input.dispose();
    }
  });
});

