const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    app: './src/app.js',
    styles: './src/styles/styles.scss',
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      { enforce: 'pre', test: /\.jsx?$/, use: ['eslint-loader'] },
      { test: /\.dust$/, use: [{ loader: 'dust-loader', options: { rootDir: 'src/views/partials' } }] },
      { test: /\.scss$/, use: ['file-loader?name=[name].css', 'sass-loader'] },
    ],
  },
  resolve: {
    alias: {
      stores: path.resolve('./src/stores'),
      components: path.resolve('./src/components'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      dust: 'dustjs-linkedin',
    }),
  ],
};
