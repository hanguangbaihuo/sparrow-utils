const merge = require('webpack-merge');
const common = require('./webpack.common');
const JsDocPlugin = require('jsdoc-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    dev: './src/index.ts',
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'sparrow_utils.[name].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, './out'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new JsDocPlugin({
      onBuildEnd: {
        conf: 'jsdoc.config.json',
        cwd: '.',
        preserveTmpFile: false,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
