import Vue from 'vue'
import Vuex from 'vuex'

import ApiService from './ApiService'
import CachePageService from './CachePageService'
import StorageService from './StorageService'
import Menu from './Menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ApiService,
    CachePageService,
    StorageService,
    Menu,
  },
})
