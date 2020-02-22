'use strict';
const AddonImportBlueprint = require('ember-source/blueprints/-addon-import');

module.exports = Object.assign({}, AddonImportBlueprint, {
  locals(options) {
    options.originBlueprintName = 'component';

    return AddonImportBlueprint.locals(options);
  },
});
