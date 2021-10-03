const path = require('path')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'], //so it runs before app
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'), //Same as entry but with absolute path to what's being served
        publicPath: '/scripts/' //Path from the content base to run the assets
    },
    devtool: 'source-map'
}
