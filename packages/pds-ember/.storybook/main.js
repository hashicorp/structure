const namedBlockPolyfill = require('ember-named-blocks-polyfill/lib/named-blocks-polyfill-plugin');
const path = require('path');

module.exports = {
  emberOptions: {
    polyfills: [namedBlockPolyfill],
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
  ],
  stories: [
    '../tests/**/*.stories.@(js|mdx)',
    '../app/**/*.stories.@(js|mdx)',
    '../docs/**/*.stories.@(js|mdx)',
    '../tests/dummy/app/**/*.stories.@(js|mdx)',
  ],

  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@hashicorp/pds-ember': path.resolve(__dirname, '../'),
     };
    return config;
  },

};
