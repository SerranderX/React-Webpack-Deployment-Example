const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js', // entry point
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: 'bundle.js', // output file name
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'], // file extensions to look for
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        }
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // test for .js or .jsx files
                exclude: /node_modules/, // exclude node_modules
                use: {
                    loader: 'babel-loader' // use babel-loader
                }
            },
            {
                test: /\.html$/, // test for .html files
                use: [
                    { loader: 'html-loader' } // use html-loader
                ]
            },
            {
                test: /\.s?[ac]ss$/, // test for .scss files
                use: [
                    'style-loader', // use style-loader
                    'css-loader', // use css-loader
                    'sass-loader' // use sass-loader
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // template file
            filename: './index.html' // output file name
        }), // create html file
        new MiniCssExtractPlugin({
            filename: '[name].css' // output file name
        }), // create css file
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
}