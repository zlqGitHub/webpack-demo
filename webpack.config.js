const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry: {
        app: './src/index.js',
        print: './src/index.js'
    },
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|jpg|svg|gif)$/, use: ['file-loader']},
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: 'Output Management',
            template: path.join(__dirname, './index.html'),
            filename: 'index.html',
        })
    ]
}