'use strict';
var Funnel = require('broccoli-funnel');
var path = require('path');
var ALL = 'all';
var NONE = 'none';

module.exports = {
  name: require('./package').name,
  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;
  },

  getConfig: function () {
    var addonOptions = (this.parent && this.parent.options) || (this.app && this.app.options) || {};
    return addonOptions[this.name] || {};
  },

  treeForAddon: function(tree) {
    tree = this.filterComponents(tree, new RegExp(/components\//, 'i'));
    return this._super.treeForAddon.call(this, tree);
  },

  treeForApp: function(tree) {
    tree = this.filterComponents(tree, new RegExp(/components\//, 'i'));
    return this._super.treeForApp.call(this, tree);
  },

  filterComponents: function(tree, regex, Funnel = Funnel) {
    var config = this.getConfig();
    var toInclude = config.include || [NONE];
    if (!Array.isArray(toInclude) || toInclude.length === 0) {
      console.warn('The `include` config for @hashicorp/structure-core should be an array. Please see the documentation for configuration at https://github.com/hashicorp/structure/tree/master/packages/structure-core#components.');
      console.warn('The config has been rewritten to not include any components');
      toInclude = [NONE];
    }
    var excludeAll = toInclude.length === 1 && toInclude.includes(NONE);
    // if we're including none, we want to exclude anything from 'components/st-'
    var regexMatcher = excludeAll ?
      new RegExp(/components\/st-/, 'i') :
      regex;

    // if the consumer has specified `include: ['all']` in their config, don't
    // filter anything
    if (toInclude.includes(ALL)) {
      return tree;
    }

    return new Funnel(tree, {
      exclude: [(name) => {
        return this.exclusionFn(name, regexMatcher, toInclude);
      }]
    });
  },

  exclusionFn: function(name, regex, toInclude) {
    var isComponent = regex.test(name);
    var fileName = path.basename(name, '.js');
    var templateName = path.basename(name, '.hbs');
    if (!isComponent) {
      return false;
    }
    if (toInclude.length === 1 && toInclude.includes(NONE)) {
      // here isComponent will match all st- components, and we'll be including
      // none, so we should return true for everything
      return true;
    }
    // exclude if fileName and templateName are not in the toInclude array
    return !toInclude.includes(fileName) && !toInclude.includes(templateName);
  },

};
