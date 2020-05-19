const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, '../html'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: [/node_modules/,/sqlMiddleware/],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'babel-preset-react']
                }
            }
        ]
    }
};
