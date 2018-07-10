const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'main.js'
  },
  resolve : { 
    alias : { 
      vue :  'vue/dist/vue.js',
    } 
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }
    ]
  }
}