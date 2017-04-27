// process.env.NODE_ENV = 'development';

var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.conf');
var opn = require('opn')

webpack(webpackConfig, function(err, stats) {
    if (err)
        throw err
    process.stdout.write(stats.toString({colors: true, modules: false, children: false, chunks: false, chunkModules: false}) + '\n');

    console.log('  Build complete.\n');

    opn('http://localhost:8080');
});
