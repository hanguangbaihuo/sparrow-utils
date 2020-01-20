/**
 * webpack config
 */
const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sparrow_utils.js',
    library: 'sparrow_utils',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
    // lodash: {
    //   commonjs: 'lodash',
    //   commonjs2: 'lodash',
    //   amd: 'lodash',
    //   root: '_',
    // },
  },
};