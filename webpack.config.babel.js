import 'babel-polyfill';
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const DEBUG = process.env.NODE_ENV !== 'production';
const VERBOSE = process.env.NODE_ENV === 'production';

export default {
  cache: DEBUG,
  debug: VERBOSE,
  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },

  entry: './src/jsx/index.jsx',
  output: {
    publicPath: './dist',
    path: './dist',
    filename: 'bundle.js'
  },
  target: 'web',
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': process.env.NODE_ENV }),
    new ExtractTextPlugin('bundle.css', { allChunks: true })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, include: [path.resolve(__dirname, 'src/jsx')], loader: 'babel' },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src/jsx')],
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  }
};
