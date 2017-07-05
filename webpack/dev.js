const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.js');

module.exports = webpackMerge(baseConfig, {
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
});
