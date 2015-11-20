/*eslint-env node*/

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss-loader") },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel?presets[]=es2015&presets[]=stage-0&presets[]=react" }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": "\"production\""
      }
    })
  ],
  postcss: [
    require("autoprefixer"),
    require("postcss-custom-media")
  ]
};
