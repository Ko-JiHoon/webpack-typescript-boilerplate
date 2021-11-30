const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules\/(?!(axios))/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: './.babelrc',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  output: {
    filename: 'whatap-browser-agent.js',
    library: 'WhatapBrowserAgent',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
