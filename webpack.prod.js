// ========================================
// DEPENDÊNCIAS
// ========================================
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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

  // DEBBUGING
  devtool: 'source-map',

  // MODULES
  module: {
    rules: [
      // STYLUS LOADER
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css-loader!stylus-loader')
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
    new CleanWebpackPlugin(['dist'], {
      root:     __dirname,
      verbose:  true,
      dry:      false,
    }),
    new webpack.NamedModulesPlugin(),
    new GoogleFontsPlugin({
      fonts: [
          { family: "Open Sans", variants: [ "400", "500", "600" ] }
      ],
      local: false
    }),
    new ExtractTextPlugin('../styles/[name].[chunkhash].css'),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './source/index.html',
      minify: {
        collapseWhitespace: true
      },
    }),
    new webpack.NamedChunksPlugin((chunk) => {
      if (chunk.name) {
          return chunk.name;
      }
      return chunk.mapModules(m => path.relative(m.context, m.request)).join("_");
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module){
        return module.context && module.context.includes("node_modules");
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

}

