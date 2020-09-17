export default {
  test: {
    url: '/test',
    params: data => {
      return {
        ...data,
      }
    },
  },
}
