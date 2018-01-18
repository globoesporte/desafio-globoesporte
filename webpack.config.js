// ========================================
// DEPENDÊNCIAS
// ========================================
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

// ========================================
// PlUGINS
// ========================================
const NameAllModulesPlugin = require('name-all-modules-plugin');
const stylusLoader = ExtractTextPlugin.extract('css-loader!stylus-loader');
const externalCSS = new ExtractTextPlugin('../styles/[name].[chunkhash].css');
const cleanDist = new CleanWebpackPlugin(['dist'], {
  root:     __dirname,
  verbose:  true,
  dry:      false,
});
const fonts = new GoogleFontsPlugin({
  fonts: [
      { family: "Open Sans", variants: [ "400", "700" ] }
  ],
  local: false
});
const html = new HtmlWebpackPlugin({
  filename: '../index.html',
  template: './source/index.html',
  minify: {
    collapseWhitespace: true
  },
});
const splittingCode = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: Infinity
});

// ========================================
// WEBPACK CONFIG
// ========================================
module.exports = {
  // ENTRYS
  entry: {
    main: ['./source/assets/scripts/main.js', './source/assets/styles/main.styl'],
    vendor: ['react', 'react-dom'],
  },

  // OUTPUT
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist/scripts/'),
  },

  // DEVTOOLS
  devtool: 'inline-source-map',

  // MODULES
  module: {
    rules: [
      // STYLUS LOADER
      {
        test: /\.styl$/,
        loader: stylusLoader
      },
      // JAVASCRIPT LOADER
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },
      // IMAGE LOADER
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '../img/',
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
    cleanDist,
    new webpack.NamedModulesPlugin(),
    fonts,
    externalCSS,
    html,
    new webpack.NamedChunksPlugin((chunk) => {
      if (chunk.name) {
          return chunk.name;
      }
      return chunk.mapModules(m => path.relative(m.context, m.request)).join("_");
    }),
    splittingCode,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new NameAllModulesPlugin(),
  ],

}

