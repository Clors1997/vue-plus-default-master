import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@vant/touch-emulator'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import BaseComponent from './base'
Vue.use(BaseComponent, {})

import CustomComponent from './components'
Vue.use(CustomComponent, {})

import VantGlobalComponent from './vant-global'
Vue.use(VantGlobalComponent, {})

import FastClick from 'fastclick'
FastClick.attach(document.body)

import plusInit from './utils/plus.js'
Vue.prototype.$plus = plusInit

import Navigation from 'vue-navigation'
Vue.use(Navigation, {
  router,
  store,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
