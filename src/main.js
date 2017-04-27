import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// const isDebug_mode = process.env.NODE_ENV !== 'production';
//
// Vue.config.devtools = isDebug_mode;
// Vue.config.silent = !isDebug_mode;

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(Vuex)

import routes from './routes';
import store from './store/store'
import App from './App.vue'

const router = new VueRouter({mode: 'hash', base: __dirname, routes: routes});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
