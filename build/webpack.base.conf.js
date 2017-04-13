var path = require('path');

module.exports = {
    entry: {
        app: './src/main.js'
    },

    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: '/',
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.json/,
                loader: 'json-loader'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(woff2?|eot|ttf|otf|png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '[name].[hash:7].[ext]'
                }
            }
        ]
    },

    resolve: {
        extensions: [
            '.js', '.css', '.vue'
        ],
        alias: {
            'vue$': 'vue/dist/vue.js',
            // 'vue$': 'vue/dist/vue.common.js'
        }
    }
}
