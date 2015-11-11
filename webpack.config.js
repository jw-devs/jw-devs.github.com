/*eslint-env node*/

var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss-loader") },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel?presets[]=stage-0&presets[]=react&presets[]=es2015" }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ],
  postcss: [
    require("autoprefixer"),
    require("postcss-custom-media")
  ]
};
