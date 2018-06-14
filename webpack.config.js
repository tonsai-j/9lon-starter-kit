const path = require('path')
const htmlplugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        inline: true,
        port: 8008
    },
    entry: './src/my-app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    plugins: [
        new htmlplugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}