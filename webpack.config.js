module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/public' ,
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: __dirname + '/public',
  },
  module: {
    rules: [
      {
        test: /\.js$/,      // <== regular expression pra pegar ".js" ( '\' = anything, '$' = end )
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
};