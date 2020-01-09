const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|jpg|svg|gif)$/, use: ['file-loader']},
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
            filename: 'index.html',
        })
    ]
}