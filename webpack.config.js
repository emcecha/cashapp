var path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./js/app.jsx",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "out/js")
    },
    devServer: {
        inline: true,
        contentBase: "./",
        port: 3001
    },
    mode: "development",
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx$/, exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["es2015", "stage-2", "react"] }
                }
            },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader" // translates CSS into CommonJS
                            },
                            {
                                loader: "sass-loader" // compiles Sass to CSS
                            }
                        ],
                        fallback: "style-loader" // used when css not extracted
                    }
                ))
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new ExtractTextPlugin({filename: 'main.css', allChunks: true})
    ]
}
