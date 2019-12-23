'use strict';

const blueprintHelpers = require('ember-cli-blueprint-test-helpers/helpers');
const setupTestHooks = blueprintHelpers.setupTestHooks;
const emberNew = blueprintHelpers.emberNew;
const emberGenerateDestroy = blueprintHelpers.emberGenerateDestroy;

const expect = require('ember-cli-blueprint-test-helpers/chai').expect;

let expectedComponentComment = `/**
 *
 * \`StFoo\` description here.
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
</div>`;
let expectedSassStructure = `.st-foo {

}`;
let expectedTestDescription = `Integration | Component | StFoo`;
let expectedTestRenderInvocation = `await render(hbs\`<St::Foo />\`)`;
// lol indentation is necessary here to match
let expectedTestBlockRenderInvocation = `
    await render(hbs\`
      <St::Foo>
        template block text
      </St::Foo>
    \`)`;

let expectedStoryDefaultExport =`export default {
  title: 'Structure | St::Foo',
  component: 'StFoo',
};`

let expectedStoryExport = `export let StFoo = () => ({
  template: hbs\`<St::Foo />\`,`;

let td = require('testdouble');
td.config({ promiseConstructor: require('rsvp').Promise });

let MockUI = require('console-ui/mock');

let test = (componentName, assertFn) => {
  let args = ['st-component', componentName];
    return emberNew({target: 'addon'})
      .then(() => emberGenerateDestroy(args, assertFn));
};

describe('Acceptance: ember generate and destroy st-component', function() {
  setupTestHooks(this);

  let prompt;
  beforeEach(function() {
    prompt = td.function();
    td.replace(MockUI.prototype, 'prompt', prompt);
    td.when(prompt(td.matchers.anything())).thenResolve({ answer: 'overwrite', deleteFiles: 'all' });
  });

  afterEach(function() {
    td.reset();
  });

  it(`generates component class for 'foo'`, function() {
    return test('foo', file => {
      expect(file('addon/components/st/foo.js'))
        .to.contain(expectedComponentComment)
        .to.contain(expectedTagNameDeclaration);
    });
  });

  it(`generates component class for 'st/foo'`, function() {
    return test('st/foo', file => {
      expect(file('addon/components/st/foo.js'))
        .to.contain(expectedComponentComment)
        .to.contain(expectedTagNameDeclaration);
    });
  });

  it(`generates a template file for 'foo'`, function() {
    return test('foo', file => {
      expect(file('addon/templates/components/st/foo.hbs'))
        .to.contain(expectedTemplateStructure);
    });
  });

  it(`generates a template file for 'st/foo'`, function() {
    return test('st/foo', file => {
      expect(file('addon/templates/components/st/foo.hbs'))
        .to.contain(expectedTemplateStructure);
    });
  });

  it(`generates a Sass file for 'foo'`, function() {
    return test('foo', file => {
      expect(file('addon/components/st/foo.scss'))
        .to.contain(expectedSassStructure);
    });
  });

  it(`generates a Sass file for 'st/foo'`, function() {
    return test('st/foo', file => {
      expect(file('addon/components/st/foo.scss'))
        .to.contain(expectedSassStructure);
    });
  });

  it(`generates a test file for 'foo'`, function() {
    return test('foo', file => {
      expect(file('tests/integration/components/st/foo-test.js'))
        .to.contain(expectedTestDescription)
        .to.contain(expectedTestRenderInvocation)
        .to.contain(expectedTestBlockRenderInvocation);
    });
  });

  it(`generates a test file for 'st/foo'`, function() {
    return test('st/foo', file => {
      expect(file('tests/integration/components/st/foo-test.js'))
        .to.contain(expectedTestDescription)
        .to.contain(expectedTestRenderInvocation)
        .to.contain(expectedTestBlockRenderInvocation);
    });
  });

  it(`generates a story file for 'foo'`, function() {
    return test('foo', file => {
      expect(file('stories/st/foo.stories.js'))
        .to.contain(expectedStoryDefaultExport)
        .to.contain(expectedStoryExport);
    });
  });

  it(`generates a story file for 'st/foo'`, function() {
    return test('st/foo', file => {
      expect(file('stories/st/foo.stories.js'))
        .to.contain(expectedStoryDefaultExport)
        .to.contain(expectedStoryExport);
    });
  });
});
