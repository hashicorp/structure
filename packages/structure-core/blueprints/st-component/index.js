'use strict';

const chalk = require('chalk');
const path = require('path');
const stringUtil = require('ember-cli-string-utils');
const pathUtil = require('ember-cli-path-utils');
const getPathOption = require('ember-cli-get-component-path-option');
const normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
  description: 'Generates a Structure component.',

  availableOptions: [
    {
      name: 'path',
      type: String,
      default: 'components',
      aliases: [{ 'no-path': '' }],
    },
  ],

  filesPath: function() {
    let filesDirectory = 'files';

    return path.join(this.path, filesDirectory);
  },

  fileMapTokens: function() {
    return {
      __templatename__: function(options) {
        return options.dasherizedModuleName;
      },
    };
  },

  normalizeEntityName: function(entityName) {
    let name = entityName;
    if (!name.startsWith('st/')) {
      name = 'st/'+name;
      this.ui.writeLine(chalk.yellow(`Structure components are prefixed to the
        \`st\` directory. This prefix was not included so it was added. Creating ${name}.`));
    }
    return normalizeEntityName(name);
  },

  locals: function(options) {
    let templatePath = '';
    let importTemplate = '';
    let contents = '';
    let parts = options.entity.name.split('/');

    let angleBracketInvocation = parts.map(part => stringUtil.classify(part)).join('::');
    let cssClassName = parts.map(part => stringUtil.dasherize(part)).join('-');

    // if we're in an addon, build import statement
    if (options.project.isEmberCLIAddon() || (options.inRepoAddon && !options.inDummy)) {
      templatePath =
        pathUtil.getRelativeParentPath(options.entity.name) +
        'templates/components/' +
        stringUtil.dasherize(options.entity.name);
      importTemplate = "import layout from '" + templatePath + "';\n";
      contents = '\n  layout,\n>';
    }

    return {
      importTemplate,
      contents,
      path: getPathOption(options),
      angleBracketInvocation,
      cssClassName,
    };
  },
};
