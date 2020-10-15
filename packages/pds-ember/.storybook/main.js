module.exports = {
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
