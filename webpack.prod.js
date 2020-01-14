const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    library: 'sparrowUtils',
    libraryTarget: 'umd',
  },
  optimization: {
    usedExports: true,
  },
});