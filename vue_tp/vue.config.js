module.exports = {
  // publicPath: '/jingdong'
  publicPath: './',
  outputDir: 'dist', // 打包后文件的目录 （默认为dist）
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录  默认为‘’没有单独目录js/css/img在根目录中。
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') { // 为生产环境修改配置...
      config.mode = 'production'
      config.performance = { // 打包文件大小配置
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
    }
  },
  devServer: {
    proxy: {
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
