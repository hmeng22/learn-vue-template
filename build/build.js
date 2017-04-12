// process.env.NODE_ENV = 'production';

var path = require('path');
var shell = require('shelljs');
var chalk = require('chalk');
var ora = require('ora');
var webpack = require('webpack');
var webpackConfig = require('./webpack.prod.conf');

var spinner = ora('building for production...');
spinner.start();

// remove the old files
var oldFilesPath = path.resolve(__dirname, '../public/dist');
shell.rm('-rf', oldFilesPath);
shell.rm('-rf', oldFilesPath + '/../app.js');
shell.rm('-rf', oldFilesPath + '/../index.html');

webpack(webpackConfig, function(err, stats) {
    spinner.stop();
    if (err)
        throw err
    process.stdout.write(stats.toString({colors: true, modules: false, children: false, chunks: false, chunkModules: false}) + '\n');

    console.log(chalk.cyan('  Build complete.\n'));
});
