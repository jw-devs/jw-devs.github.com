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
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader") },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.html/, loader: "raw!html-minify" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "_index.html", hash: true }),
    new ExtractTextPlugin("style.css")
  ],
  postcss: [
    require("autoprefixer")
  ]
};
