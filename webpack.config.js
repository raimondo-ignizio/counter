const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  entry: "./counter/js/counter.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Counter",
      template: path.resolve(__dirname, "./counter/counter.html"),
    }),
  ]
};
