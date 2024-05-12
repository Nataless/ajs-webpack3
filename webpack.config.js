const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.txt$/,
                loader: "raw-loader"
            },
            {
                test: /\.css$/,
                use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',

        }),
        new MiniCssExtractPlugin({
            filename: './CSS/style.css',
        })

    ],


}