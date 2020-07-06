const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                {
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.pug$/,
                use: [
                    "raw-loader",
                    "pug-html-loader"
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            {filename: 'style.css'}
        ),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug',
        }),
        new HtmlWebpackPugPlugin()
    ],
};
