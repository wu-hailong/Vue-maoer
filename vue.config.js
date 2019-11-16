
const path = require("path")

module.exports = {
  chainWebpack:config=>{
    config.resolve.alias
      .set('pages',path.resolve(__dirname,'./src/pages'))
      .set('components',path.resolve(__dirname,'./src/components'))
      .set('assets',path.resolve(__dirname,'./src/assets'))
      .set('utils',path.resolve(__dirname,'./src/utils'))
  },
  devServer:{
    proxy:{
        '/api':{
          target:'https://www.missevan.com',
          changeOrigin:true
        }
    }
  }
}