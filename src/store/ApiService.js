import Vue from 'vue'
import API from '@/api/index'
import { get } from '@/utils/request'

function apiFactoryBuild(api_key, data) {
  return get(
    API[api_key[0]][api_key[1]].url,
    API[api_key[0]][api_key[1]].params(data),
  )
}

function apiFactoryBuildJsonp(api_key, data) {
  return Vue.http.jsonp(API[api_key[0]][api_key[1]].url, {
    params: API[api_key[0]][api_key[1]].params(data),
    jsonp: API[api_key[0]][api_key[1]].jsonp,
  })
}

export default {
  state: {
    tempData: {},
  },
  mutations: {
    changeTempData(state, result) {
      state.tempData = result
    },
  },
  actions: {
    async apiFactory(store, { api_key, data, is_jsonp = false }) {
      console.log(api_key, data, is_jsonp)
      if (is_jsonp) {
        return apiFactoryBuildJsonp(api_key.split('/'), data)
      } else {
        let result = await apiFactoryBuild(api_key.split('/'), data)
        store.commit('changeTempData', result)
        return result
      }
    },
  },
}
