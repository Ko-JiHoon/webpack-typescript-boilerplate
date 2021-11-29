const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    '@babel/polyfill': './src/index.ts',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'whatap-browser-agent.js',
    library: 'WhatapBrowserAgent',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: 'dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_module/,
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
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 5500,
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
  },
  mode: 'production',
};
