const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // context: path.resolve(__dirname, "src"),
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: "babel-loader"
          // options: {
          //   presets: ['@babel/preset-env']
          // }
          },
      {
        test: /\.scss$/i,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ]
  }, 
  plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' }), new HtmlWebpackPlugin({template: './src/index.html'})]
};