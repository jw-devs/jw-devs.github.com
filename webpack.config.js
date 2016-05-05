var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./_index.js",
  output: {
    filename: "index.js",
    path: __dirname
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader") },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.html/, loader: "raw!html-minify" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "_index.html", hash: true }),
    new ExtractTextPlugin("bundle.css")
  ],
  postcss: [
    require("autoprefixer")
  ]
};
