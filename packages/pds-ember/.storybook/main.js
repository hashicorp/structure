const namedBlockPolyfill = require('ember-named-blocks-polyfill/lib/named-blocks-polyfill-plugin');

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
    '../addon/**/*.stories.@(js|mdx)',
    '../app/**/*.stories.@(js|mdx)',
    '../docs/**/*.stories.@(js|mdx)',
    '../tests/dummy/app/**/*.stories.@(js|mdx)',
  ],
};
