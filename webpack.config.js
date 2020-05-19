var path = require("path");
var webpack = require("webpack");

var CLIENT = path.resolve(__dirname, "client");
var OUTPUT = path.resolve(__dirname, "build/client");

var config = {
  entry: CLIENT + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      include: CLIENT
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
      alias: {
          'utils': path.resolve(__dirname, './utils')  // <-- When you build or restart dev-server, you'll get an error if the path to your utils.js file is incorrect.
      }
  },
    plugins: [

        // ...

        new webpack.ProvidePlugin({
            'utils': 'utils'
        })
    ]
};

module.exports = config;
