var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: '/',
        filename: '[name].js'
    },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),        
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin(),
        new HtmlWebpackPlugin({template: 'src/index.html', filename: 'index.html', inject: true})
    ]
});
