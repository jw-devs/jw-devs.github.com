var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader") }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ],
  postcss: [
    require("autoprefixer-core"),
    require('postcss-custom-media')
  ]
};
