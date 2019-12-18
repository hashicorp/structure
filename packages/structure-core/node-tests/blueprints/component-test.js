'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy component', function() {
  setupTestHooks(this);

  it('component foo', function() {
    let args = ['component', 'foo'];

    // pass any additional command line options in the arguments array
    return emberNew()
      .then(() => emberGenerateDestroy(args, (file) => {
        // expect(file('app/type/foo.js')).to.contain('foo');
    }));
  });
});
