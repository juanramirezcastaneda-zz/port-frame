module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      cacheDirectory: true,
    },
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
