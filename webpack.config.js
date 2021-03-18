const path = require("path")

module.exports = {
  entry: {
    index: './src/index.js',
    galaxy: './src/galaxy.js'
  }, 

  /* configurando nome e diretório dos arquivos que serão gerados quando o for dado o comando do webpack */
  output: {
    filename: '[name].budle.js',
    path: path.resolve(__dirname,'dist')
  },

  module: {
    rules: [
      {
        /* webpack vai percorrer o projeto todo e pegar os arquivos que terminarem em .js */
        test: /\js.$/,
        use: ['babel-loader']
      }
    ]
  },

 /*procurar qualquer alteração e quando encontrar vai processasr o webpack novamente, e vai mandar tudo pra pasta dist */
  watch: true,

  /*Chave de configuração do servidor de desenvolvimento, monitora a pasta dist e qunado houver arquivo novo ele recarrega o browser */
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    liveReload: true
  }
    
}