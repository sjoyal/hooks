const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: 'none',
  resolve: {
    alias: {
      constants: path.resolve(__dirname, 'src/constants'),
      context: path.resolve(__dirname, 'src/context'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      views: path.resolve(__dirname, 'src/views'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
}
