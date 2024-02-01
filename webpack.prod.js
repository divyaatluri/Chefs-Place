const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // no need from webpack 5
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name].[hash].[ext]",
    clean: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css",
    }),
  ],

  optimization: {
    minimizer: [new CssMinizerWebpackPlugin(), new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});
