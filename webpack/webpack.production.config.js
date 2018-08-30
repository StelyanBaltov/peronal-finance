const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const paths = require("./paths");
const vendors = require("./vendors");

module.exports = {
    mode: "production",
    context: paths.srcPath,
    entry: {
        app: ['babel-polyfill', paths.entryPath],
        vendor: vendors
    },
    output: {
        filename: "[name].bundle.js",
        path: paths.outputPath,
        publicPath: "/"
    },
    optimization: {
        splitChunks: {
        chunks: "all"
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "postcss-loader"
                ]
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(paths.distPath),
        new UglifyJSPlugin(),
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            title: "React App Template",
            filename: "index.html",
            template: paths.templatePath,
            inject: true
        })
    ]
};
