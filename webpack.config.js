var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    app: ["./src/index.jsx"]
  },
  module: {
   loaders: [
     {
       test: /\.jsx?$/,
       loader: "babel-loader",
       exclude: /node_modules/,
       query: {
         presets: ["es2015", "react"]
       }
     },
     {
       test: /\.scss$/,
       loaders: ["style-loader", "css-loader", "sass-loader"]
     }
   ]
 },
  resolve: {
    extensions: ["", ".js", ".jsx", ".json"]
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "dist/"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "dist/",
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
