// https://babeljs.io/docs/en/config-files#monorepos
module.exports = {
  presets: [
    require.resolve('@port-frame/babel-config'),
    require.resolve('@port-frame/babel-config/react'),
    require.resolve('@port-frame/babel-config/typescript'),
  ],
  overrides: [
    // NOTE: here we can define specific overrides for a repo if necessary
    // example may be for providing node specific overrides if we decide
    // to compile our backend with babel/webpack
  ],
};
