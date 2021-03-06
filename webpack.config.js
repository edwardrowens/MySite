var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/frontend/application.js',
    output: {
        path: path.join(__dirname, 'lib', 'build'),
        filename: 'app-compiled.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }
        ]
    }
}