var opn = require('opn');
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.conf');

var compiler = webpack(webpackConfig);

var webpackDevServer = require('webpack-dev-server');

var compiler = webpack(webpackConfig);

var server = new webpackDevServer(compiler, {
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: '/',
    stats: {
        colors: true
    }
});

var port = 3000;
server.listen(port, function() {
    console.log('Listening on : http://localhost:' + port);
    opn('http://localhost:' + port);
})
