const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputDir = path.resolve(__dirname, 'dist');

const config = {
  mode: 'development',

  entry: {
    app: ['./src/index.tsx'],
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
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]',
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
