function token(method, data = {}) {
  let res = null
  let token = 'AAAAA'
  if (data.token == token) {
    res = {
      data: {},
      code: 200,
      msg: 'success',
    }
  } else {
    res = {
      data: {
        token,
      },
      code: 200,
      msg: 'update token',
    }
  }
  return res
}

module.exports = token
