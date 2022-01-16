const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;

module.exports = {
    entry: './src/index.js', // entry point
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: 'bundle.js' // output file name
    },
    resolve: {
        extensions: ['.js', '.jsx'] // file extensions to look for
    },
    mode: 'development',
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
    ],
    devServer: {
        static: path.join(__dirname, 'dist'), // static directory
        compress: true, // enable gzip compression
        port: 9000 // port number
    }
}