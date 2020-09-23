export default {
  state: {
    storage: {
      token: '',
    },
  },
  mutations: {
    setStorage(state, { key, value }) {
      console.log(key, value)
      state.storage[key] = value
      localStorage[key] = value
    },
  },
  getters: {
    getStorage: state => key => {
      if (state.storage[key] == '') {
        state.storage[key] = localStorage[key]
      }
      return state.storage[key]
    },
  },
}
