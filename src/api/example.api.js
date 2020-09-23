export default {
  test: {
    url: '/test',
    params: data => {
      return {
        ...data,
      }
    },
  },
  token: {
    url: '/token',
    params: data => {
      console.log({
        ...data,
      })
      return {
        ...data,
      }
    },
  },
}
