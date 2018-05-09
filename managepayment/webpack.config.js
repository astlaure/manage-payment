const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.module.js',
    output: {
        filename: 'app.bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test:  /\.(html)$/, exclude: /node_modules/, loader: 'html-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}