const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 写原生webpack的配置项
  configureWebpack:{
    devServer:{
      open:true,
      port:3000,
      host:'localhost'
    }
  }
})
