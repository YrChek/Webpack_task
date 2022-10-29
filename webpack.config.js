const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html/',
            filename: 'main.html'
        }),
        new MiniCssExtractPlugin()
    ]
}
