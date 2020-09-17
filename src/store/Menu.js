export default {
  state: {
    active: 0,
    sideBar: false,
  },
  mutations: {
    changeActive(state, key) {
      state.active = key
    },
    changeSideBar(state, key) {
      state.sideBar = key
    },
  },
}
