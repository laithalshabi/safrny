const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

  entry: './src/index.js',

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src',
            },
          },
          ],
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
            }
          },
        ],
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],
  },

  performance: {
    hints: false
  },

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    // compress: true,
    port: 9000,
    writeToDisk: true,
    stats: 'errors-only'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/login.html',
      filename: 'login.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/register.html',
      filename: 'register.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/egypt.html',
      filename: 'egypt.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/turkey.html',
      filename: 'turkey.html',
    }),


    new MiniCssExtractPlugin({
      filename: "css/style.css"
    })
  ],
};