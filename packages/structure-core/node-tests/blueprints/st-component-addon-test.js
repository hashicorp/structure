'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require('ember-cli-blueprint-test-helpers/chai').expect;

describe('Acceptance: ember generate and destroy st-component-addon', function() {
  setupTestHooks(this);

  it('generates the proper app re-export', function() {
    let args = ['st-component-addon', 'st/foo'];
    // the package name when you're targeting addons is 'my-addon'
    // https://github.com/ember-cli/ember-cli-blueprint-test-helpers/blob/319a4dbf94b3e9d2ba8caee68bcd00c3068cc985/lib/ember-new.js#L27
    const EXPECTED = `export { default } from 'my-addon/components/st/foo';`;

    // pass any additional command line options in the arguments array
    return emberNew({target: 'addon'})
      .then(() => emberGenerateDestroy(args, (file) => {
         expect(file('app/components/st/foo.js')).to.contain(EXPECTED);
    }));
  });
});
