/**
 * Created by hui on 2017/8/8.
 */
const path = require('path');

module.exports = {
  entry: './example/ex.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './example'),
  },
};
