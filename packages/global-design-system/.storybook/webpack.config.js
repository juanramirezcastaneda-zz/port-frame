const path = require('path');

const pathToInlineSvg = path.resolve(__dirname, '../src/assets');

module.exports = async ({ config }) => {
  const rules = config.module.rules;

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
  fileLoaderRule.exclude = pathToInlineSvg;

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        rootMode: 'upward',
      },
    },
  });

  config.module.rules.push({
    test: /\.svg$/,
    include: pathToInlineSvg,
    use: ['@svgr/webpack', 'url-loader'],
  });

  config.module.rules.push({
    test: /\.(png|jpg)$/,
    include: pathToInlineSvg,
    use: ['file-loader'],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
