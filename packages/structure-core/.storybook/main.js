module.exports = {
  addons: [
    '@storybook/addon-docs/register',
	],
  stories: ['../stories/**/*.stories.(js|mdx)'],
  presets: ['@storybook/addon-docs/preset'],
};
