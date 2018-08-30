const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const paths = require("./paths");
const vendors = require("./vendors");

module.exports = {
    mode: "development",
    context: paths.srcPath,
    devtool: 'eval-source-map',
    entry: {
        app: [
            'babel-polyfill',
            paths.entryPath,
            "webpack-hot-middleware/client",
        ],
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
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                    query: {
                        presets: ['es2015', 'stage-0', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        sourceMap: false,
                    }
                },
                "postcss-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(paths.distPath),
        new HtmlWebpackPlugin({
            title: "React App Template",
            filename: "index.html",
            template: paths.templatePath,
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
