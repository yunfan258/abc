module.exports = {
  // publicPath: '/jingdong'
  publicPath: './',
  outputDir: 'dist', // 打包后文件的目录 （默认为dist）
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录  默认为‘’没有单独目录js/css/img在根目录中。
  // webpack相关配置
  configureWebpack: (config) => {
    // config.optimization.minimize = false // 取消最小化压缩
    if (process.env.NODE_ENV === 'production') { // 为生产环境修改配置...
      config.mode = 'production'
      config.performance = { // 打包文件大小配置
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
    }
  },
  // eslint-disable-next-line no-dupe-keys
  // configureWebpack: {
  //   optimization: { // 取消最小化压缩
  //     minimize: false
  //   }
  // },
  devServer: {
    proxy: {
      // 注意这个term6...要与请求接口的开头对应
      '/term6_vue_tp/': {
        target: 'http://localhost:8080/',
        changeOrigin: true
      }
      // '/Person/': {
      //   target: 'http://localhost:8080/term6_vue_tp/public/index.php/api/',
      //   changeOrigin: true
      // }
    }
  }
}
