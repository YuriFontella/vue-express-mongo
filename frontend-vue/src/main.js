import Vue from 'vue'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'

import Auth from './packages/auth'

import router from './routes'
import store from './store'

import Directives from './directives/directives'

import VueHead from 'vue-head'
import { VueExtendLayout, layout } from 'vue-extend-layout'

Vue.use(Directives)

Vue.use(VueExtendLayout)
Vue.use(VueHead)

Vue.use(Auth)
Vue.use(VueResource)

Vue.use(VeeValidate)

Vue.http.options.root = 'http://127.0.0.1:3000/'
/* Vue.http.options.root = 'https://backend-express.herokuapp.com/' */

Vue.http.interceptors.push((request, next) => {
  request.headers.set('x-access-token', Vue.auth.getToken())
  next()
})

new Vue({
  el: '.app',
  router,
  store,
  ...layout
})
