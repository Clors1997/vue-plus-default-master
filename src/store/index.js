import Vue from 'vue'
import Vuex from 'vuex'

import ApiService from './ApiService'
import CachePageService from './CachePageService'
import Menu from './Menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ApiService,
    CachePageService,
    Menu,
  },
})
