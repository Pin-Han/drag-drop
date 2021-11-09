
const path = require('path');

module.exports = {
  entry: './src/app.ts', //bundle 的進入點
  output: {
    filename: 'bundle.js',  // bundle 檔案名稱
    path: path.resolve(__dirname, 'dist') //bundle 檔案的位置
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};