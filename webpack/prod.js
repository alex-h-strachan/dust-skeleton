const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.js');

module.exports = webpackMerge(baseConfig, {
  // add production specific plugins
});
