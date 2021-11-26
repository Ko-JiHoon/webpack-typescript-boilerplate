const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 번들링 시작 위치
  entry: {
    '@babel/polyfill': './src/index.ts',
  },
  output: {
    path: path.join(__dirname, '/dist'), // 번들 결과물 위치
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
    modules: [path.join(__dirname, 'src'), 'node_modules'], // 모듈 위치
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 템플릿 위치
    }),
  ],
  devServer: {
    host: 'localhost', // live-server host 및 port
    port: 5500,
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
  },
  mode: 'production', // 번들링 모드 development / production
};
