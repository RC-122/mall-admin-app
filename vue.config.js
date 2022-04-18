const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: 'https://mallapi.duyiedu.com/'
  },
  transpileDependencies: true,
  lintOnSave: false
})
