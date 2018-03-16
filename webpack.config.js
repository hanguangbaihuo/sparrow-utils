/**
 * webpack config
 */
const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sparrow-utils.js',
    library: 'sparrowUtils',
    libraryTarget: 'umd',
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};