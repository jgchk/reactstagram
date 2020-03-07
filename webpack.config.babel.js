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
      {
        test: /\.module.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: dev,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.less$/,
        exclude: /\.module.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: dev },
          },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
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
