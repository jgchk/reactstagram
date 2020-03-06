const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const dev = process.env.NODE_ENV === "development";

module.exports = {
  mode: dev ? "development" : "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: { contentBase: "./dist" },
  plugins: [new HtmlWebpackPlugin()]
};
