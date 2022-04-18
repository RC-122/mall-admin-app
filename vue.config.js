const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      target:'https://mallapi.duyiedu.com/',
      changeOrigin:true
    }
  },
  transpileDependencies: true,
  lintOnSave: false
}) 
