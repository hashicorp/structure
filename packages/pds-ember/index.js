/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

'use strict';

let Funnel = require('broccoli-funnel');
let mergeTrees = require('broccoli-merge-trees');
let path = require('path');

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  // (pulled from HCP:packages/addon-product-design-system)
  treeForStyles: function () {
    let stylesPath = path.join(__dirname, 'app/styles/pds');

    let PDS = new Funnel(stylesPath, {
      destDir: 'pds',
      annotation: 'PDS Styles',
    });
    let mergedTrees = mergeTrees([PDS], { overwrite: true });

    return this._super.treeForStyles(mergedTrees);
  },

  // required for ember-cli-sass (according to docs)
  included: function (/* app */) {
    this._super.included.apply(this, arguments);
  },
};
