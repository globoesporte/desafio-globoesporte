// ========================================
// DEPENDÊNCIAS
// ========================================
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
const WriteFilePlugin = require('write-file-webpack-plugin');

// ========================================
// WEBPACK CONFIG
// ========================================
module.exports = {
  // ENTRYS
  entry: {
    main: ['react-hot-loader/patch', './source/assets/scripts/main.js', './source/assets/styles/main.styl'],
  },

  // DEVTOOLS
  devtool: 'inline-source-map',

  // SERVER
  devServer: {
    contentBase: './temp',
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    noInfo: true
  },

  // MODULES
  module: {

    rules: [
      // STYLUS LOADER
      {
        test: /\.styl$/,
        // loader: stylusLoader
        loader: 'style-loader!css-loader!stylus-loader'
      },
      // JAVASCRIPT LOADER
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?cacheDirectory'
      },
      // IMAGE LOADER
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './img/',
              name: '[name].[ext]'
            }
          },

          {
            loader: 'img-loader',
            options: {
              enabled: true,
              gifsicle: {
                interlaced: false
              },
              mozjpeg: {
                progressive: true,
                arithmetic: false
              },
              optipng: true,
              pngquant: {
                floyd: 0.5,
                speed: 2
              },
              svgo: {
                plugins: [
                  { removeTitle: true },
                  { convertPathData: false }
                ]
              }
            }
          }
        ]
      },
    ]
  },

  // ========================================
  // PLUGINS
  // ========================================
  plugins: [
    new webpack.NamedModulesPlugin(),
    new WriteFilePlugin({
      test: /\.(html)$/,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './source/index.html',
      minify: {
        collapseWhitespace: false
      },
    }),
    new GoogleFontsPlugin({
      fonts: [
          { family: "Open Sans", variants: [ "400", "500", "600" ] }
      ],
      local: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  // OUTPUT
  output: {
    path: path.resolve(__dirname, 'temp'),
    publicPath: '/assets/',
    filename: '[name].bundle.js'
  },

}


