const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let isProduction = process.env.NODE_ENV === 'production';
let mode = isProduction ? 'production' : 'development';

const getRule = function(regex){
  return {
    test: regex,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: !isProduction,
        },
      },
      'css-loader',
      'sass-loader',
    ],
  };
};

const getPlugin = function(name){
  return new MiniCssExtractPlugin({
    filename: name + '.css',
  });
};

module.exports = {
  mode: mode,
  entry: {
    "old-fashioned-ajax": './src/js/index.js',
    demo: './src/js/demo.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    getPlugin('demo'),
    new HtmlWebpackPlugin({
      title: 'Old Fashioned Ajax',
      template: './src/html/index.html',
      minify: false,
    })
  ],
  module: {
    rules: [
      getRule(/demo\.scss$/),
    ],
  },
};
