const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//copy the images to the dist folder
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./js/main.js",
    products: "./js/products.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "sass-loader"
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      chunks: ["main"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./products.html",
      chunks: ["products"],
      filename: "products.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./*.png", to: path.resolve(__dirname, "dist") },
        { from: "./*.jpg", to: path.resolve(__dirname, "dist") },
        { from: "./*.jpeg", to: path.resolve(__dirname, "dist") },
      ],
    }),
  ],

  devServer: {
    static: "./dist",
    port: 9000,
  },
};
