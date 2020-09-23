const webpackConfig = require('./config/webpack.config.js')
const isProd = process.env.NODE_ENV === 'production'
const DEV_URL = 'http://127.0.0.1'

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '加载中'
      return args
    })

    webpackConfig(config)
  },
  productionSourceMap: false,
  publicPath: !isProd ? '/' : '',
  css: {
    extract: !!isProd,
    sourceMap: !isProd,
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: 'true;@import "~@/style/_variables.less"',
          },
        },
      },
    },
  },
  devServer: {
    port: 12315,
    proxy: {
      // '^/api': {
      //   target: DEV_URL,
      //   changeOrigin: false,
      //   pathRewrite: {
      //     '^/api': '',
      //   }
      // },
      '^/api': {
        target: DEV_URL,
        bypass: function(req, res) {
          const name = req.path
            .split('/api/')[1]
            .split('/')
            .join('_')
          const mock = require(`./src/mock/${name}`)
          let result = mock(req.method, req.query)
          delete require.cache[require.resolve(`./src/mock/${name}`)]
          res.write(JSON.stringify(result))
          res.end()
          return false
        },
      },
    },
  },
}
