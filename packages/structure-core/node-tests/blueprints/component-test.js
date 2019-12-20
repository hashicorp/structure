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

    let expectedComponentComment = `/**
 *
 * \`St::Foo\` description here.
 *
 * \`\`\`js
 * <St::Foo
 *   @testArg={{foo}}
 * />
 * \`\`\`
 *
 * @class StFoo
 *
 *`;

    let expectedTagNameDeclaration = `tagName: '',`;
    let expectedTemplateStructure = `<div class="st-foo">
  {{yield}}
<div>`;
    return emberNew({target: 'addon'})
      .then(() => emberGenerateDestroy(args, (file) => {
         expect(file('addon/components/st/foo.js')).to.contain(expectedComponentComment);
         expect(file('addon/components/st/foo.js')).to.contain(expectedTagNameDeclaration);
         expect(file('addon/templates/components/st/foo.js')).to.contain(expectedTemplateStructure);
    }));
  });
});
