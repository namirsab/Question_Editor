const webpack = require('webpack');
var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
 test: [/\.js$/, /\.es6$/],
 exclude: /node_modules/,
 loader: WebpackStripLoader.loader('console.log')
}
devConfig.module.loaders.push(stripLoader);


devConfig.plugins.push(
  new webpack.DefinePlugin({'process.env':{'NODE_ENV': JSON.stringify('production')}})
)
devConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({compress:{ warnings: true}})
)

// devConfig.plugins = [
//     new webpack.DefinePlugin({'process.env':{'NODE_ENV': JSON.stringify('production')}}),
//     new webpack.optimize.UglifyJsPlugin({compress:{ warnings: true}}),
//     new ExtractTextPlugin('css/style.css')
// ]



module.exports = devConfig;
