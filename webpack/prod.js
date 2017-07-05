const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./base.js');

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
});
