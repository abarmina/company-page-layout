const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const extractSass = new ExtractTextPlugin({
    filename: 'style.css',
});
  

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
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
        extractSass,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug',
        }),
        new HtmlWebpackPugPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
};
