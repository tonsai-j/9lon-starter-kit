const path = require("path");
const htmlplugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: "./src/my-app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  // Tell Webpack which directories to look in to resolve import statements.
  // Normally Webpack will look in node_modules by default but since we’re overriding
  // the property we’ll need to tell it to look there in addition to the
  // bower_components folder.
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ]
  },
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8008,
    compress: true,
    overlay: {
      errors: true
    },
    disableHostCheck: true
  },

  plugins: [
    new htmlplugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'node_modules/@webcomponents/webcomponentsjs/*.js'),
      to: 'node_modules/@webcomponents/webcomponentsjs/[name].[ext]'
    }])
  ]
};
