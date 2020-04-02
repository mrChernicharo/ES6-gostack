module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // <== regular expression ( '\' = anything, '$' = end )
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
};