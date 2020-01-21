module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        shippedProposals: true,
        useBuiltIns: 'usage',
        corejs: '3',
        targets: ['last 1 Chrome versions', 'last 1 Firefox versions', 'last 1 Safari versions'],
      },
    ],
  ],
};

