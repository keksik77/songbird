const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      },
    },
    // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
    {
      test: /\.(css|scss|module.scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|ico|mp3)$/,
      exclude: /node_modules/,
      use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
    },
  ]
},
devServer: {
  historyApiFallback: true,
},
plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  })
 ]
};
