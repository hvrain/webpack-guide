const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //root directory
  // context: path.resolve(__dirname, "./"),
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
    // about: './about.js',
    // contact: './contact.js',
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
};
