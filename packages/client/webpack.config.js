const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputDir = path.resolve(__dirname, 'dist');

const config = {
  mode: 'development',

  entry: {
    app: ['./src/App.tsx'],
  },

  output: {
    path: outputDir,
    filename: 'js/[name].bundle.js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};

module.exports = config;
