'use strict';

const Plugin = require('broccoli-caching-writer');
const path = require('path');
const fs = require('fs');
const walkSync = require('walk-sync');

module.exports = class ComponentInclude extends Plugin {
  constructor(inputNodes, options = {}) {
     super(inputNodes, {
      name: options && options.name,
      annotation: options && options.annotation
    });
    this.joinSeparator = '\n';
    this.outputFile = 'components.scss';
  }

  build() {
    const componentIncludeFile = this.inputPaths.reduce(
      (output, inputPath) => {
        return output +
          walkSync(inputPath)
          .map(filepath => {
            return `@forward '${path.basename(filepath, '.scss')}';`;
          })
          .join(this.joinSeparator);
      },
      '');

     fs.writeFileSync(path.join(this.outputPath, this.outputFile), componentIncludeFile);
  }
}
