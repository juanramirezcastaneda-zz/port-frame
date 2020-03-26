const { shouldPrintComment } = require('babel-plugin-smart-webpack-import');

function config() {
  const env = process.env.NODE_ENV || 'development';

  return {
    shouldPrintComment,

    presets: [
      [
        '@babel/preset-react',
        {
          development: env !== 'production',
        },
      ],
    ],

    plugins: [
      '@babel/plugin-proposal-object-rest-spread',

      '@babel/plugin-syntax-dynamic-import',

      'babel-plugin-typescript-to-proptypes',

      'babel-plugin-smart-webpack-import',

      [
        'babel-plugin-styled-components',
        {
          pure: true,
        },
      ],

      'react-hot-loader/babel',
    ],

    env: {
      production: {
        plugins: [
          [
            'babel-plugin-transform-react-remove-prop-types',
            {
              removeImport: true,
            },
          ],

          '@babel/plugin-transform-react-inline-elements',

          '@babel/plugin-transform-react-constant-elements',
        ],
      },
    },
  };
}

module.exports = config;
