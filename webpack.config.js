/*
https://webpack.js.org/configuration/resolve/#resolvefallback
*/
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    //library: 'purgeCss',
    library: {
      name: 'purgeCss',
      type: 'var'
    },
    filename: 'index-webpack.js',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'global'
  },
  mode: 'development',
  target: ['web'],
  resolve: {
    fallback: {
    }
  },
  plugins: [
  ],
  stats: {
    errorDetails: true
  }
}; 