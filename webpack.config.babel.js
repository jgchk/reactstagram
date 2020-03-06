import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

import { dev } from './src/config'

export default {
  mode: dev ? 'development' : 'production',
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: dev ? 'source-map' : false,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin()],
}
