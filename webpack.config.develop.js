var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: 'eval',
    entry:    {
        alarm: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client',
            './src/alarm/alarm.js'
        ]
    },
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    eslint: {
        configFile: '.eslintrc'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
            // {
            //     test: /\.js$/,
            //     loader: 'eslint',
            //     include: path.join(__dirname, 'src')
            // }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
