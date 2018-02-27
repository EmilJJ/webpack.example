const path = require("path");
const merge = require("webpack-merge");
const devserver = require('./webpack/devserver');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = {
    entry: PATHS.source + '/index.js',
    output: { path: PATHS.build, filename: '[name].js' },
    plugins: [
      new HtmlWebpackPlugin({ title: 'Webpack App' }),
    ],
}

const developmentConfig = {
    devServer: {
        stats: 'errors-only',
        port: 9000,
    },
}

module.exports = (env) => {
  if (env === 'production') return common;
  if (env === 'development') return merge([devserver(), common]);
}