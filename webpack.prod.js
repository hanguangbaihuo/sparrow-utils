const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    prod: './src/index.ts',
  },
  devtool: 'source-map',
  output: {
    filename: 'sparrow_utils.[name].bundle.js',
    library: 'sparrowUtils',
    libraryTarget: 'umd',
  },
  optimization: {
    usedExports: true,
  },
});
