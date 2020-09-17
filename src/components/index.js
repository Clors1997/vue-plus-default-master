const files = require.context('./', true, /.*\.vue$/)

const components = files.keys().map(key => {
  return files(key).default
})

export default {
  install(Vue) {
    console.log(components)
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  },
}
