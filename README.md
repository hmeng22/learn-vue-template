# vue-template
Vue2-Webpack2-Express template.

## Build Setup

```
# install dependencies
$ npm install

# serve manually
# $ npm run server
# $ npm run dev
# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification
$ npm run build
```

## Project Structure

```
Project
  |- build
  |   |- build.js
  |   |- dev.js
  |   |- devServer.js
  |   |- server.js
  |   |- webpack.base.conf.js
  |   |- webpack.base.conf.js
  |   |- webpack.prod.conf.js
  |- model
  |   |- db.js
  |- routes
  |   |- index.js
  |- src
  |   |- components
  |   |- pages
  |   |- vuex
  |   |- App.vue
  |   |- index.html
  |   |- main.js
  |   |- routes.js
  |- views
  |   |- error.pug
  |   |- index.pug
  |   |- layout.pug
  |- app.js
  |- package.json
  |- .babelrc
  |- .gitignore
```

## Tips

1. webpack config files

   ```
   |- webpack.base.conf.js
   |- webpack.dev.conf.js
   |- webpack.prod.conf.js

   $ npm i webpack-merge --save-dev
   ```

2. webpack 'vue$' configuration

   ```
   alias: {
     // dev-tools available
     'vue$': 'vue/dist/vue.js',
     // dev-tools unavailable
     //'vue$': 'vue/dis/vue.common.js'
   }
   ```

3. webpack Hot-Module-Replacement

   ```
   $ npm i webpack webpack-dev-server --save-dev

   plugins: [
     new webpack.HotModuleReplacementPlugin()
   ]
   ```

4. generate index.html with outputs injected

   ```
   $ npm i html-webpack-plugin --save-dev

   plugins: [
     new HtmlWebpackPlugin({
       template: './src/index.html', 
       filename: 'index.html', 
       inject: true
     })
   ]
   ```

5. webpack production build

   ```
   // extract css into another file and optimization
   // https://github.com/webpack-contrib/extract-text-webpack-plugin
   $ npm i extract-text-webpack-plugin optimize-css-assets-webpack-plugin --save-dev
   ```

6. webpack chunks and minimization

   ```
   new webpack.optimize.UglifyJsPlugin({
     compress: {
       warnings: false
     }
   }),
   // split vendor js into its own file
   new webpack.optimize.CommonsChunkPlugin({
     name: 'vendor',
     minChunks: function(module, count) {
       // any required modules inside node_modules are extracted to vendor
       return (module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0)
     }
   }),
   // extract webpack runtime and module manifest to its own file in order to
   // prevent vendor hash from being updated whenever app bundle is updated
   new webpack.optimize.CommonsChunkPlugin({name: 'manifest', chunks: ['vendor']}),
   ```

7. vuex module

   ```
   https://vuex.vuejs.org/en/modules.html
   ```