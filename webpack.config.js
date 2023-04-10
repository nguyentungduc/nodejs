const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/views/js/app.js',
  mode: 'development',
  output: {
    filename: 'aaaaa.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        use: [
          'url-loader'
        ]
      }
    ]
  },
};

