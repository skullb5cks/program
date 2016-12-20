var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry:    {
        alarm: [
            './src/alarm/alarm.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        chunkFilename: '[name].js',
        filename: '[name].js'
    },
    eslint: {
        configFile: '.eslintrc'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            minimize: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};
