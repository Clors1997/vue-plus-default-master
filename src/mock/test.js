function test(method) {
  let res = null
  switch (method) {
    case 'GET':
      res = 'success'
      break
    default:
      res = null
  }
  return res
}

module.exports = test
