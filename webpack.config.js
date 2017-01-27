// cv nalchevanidze config webpack
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var autoprefixer = require('autoprefixer');

var config = {
  entry: ["./app.js"],
  output: {filename: "public/app.js"},
  devtool: 'source-map',
  module: {
  preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
   ],
  loaders: [
    {
      test: [/\.js$/, /\.es6$/],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: { presets: ['react', 'es2015'] }
    }
  ]
},
resolve:{extensions:['','.js','.es6','.svg','.json']}
}
config.devServer = {port: 8080,historyApiFallback: true};
config.module.loaders.push({test: /\.scss$/,loader: ExtractTextPlugin.extract('style','css?sourceMap!autoprefixer!sass?sourceMap')})
config.sassLoader = {includePaths: [ 'client/style' ]};
config.plugins = [ new ExtractTextPlugin('public/app.css')];
module.exports = config;
