var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.conf');

var app = require('../app');
var port = 3000;
app.set('port', port);

var compiler = webpack(webpackConfig);
var devMiddleware = require('webpack-dev-middleware')(compiler);
var hotMiddleware = require('webpack-hot-middleware')(compiler);

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({action: 'reload'})
        cb()
    })
})

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

app.listen(port, function() {
    console.log('Listening on : http://localhost:' + port);
});
