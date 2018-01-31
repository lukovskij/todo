const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context : __dirname,
    entry : './src/main.js',
    output : {
        path:  path.resolve(__dirname,'public', 'build'),
        publicPath : '/build/',
        filename: 'bundle.js'
    },
    devtool : NODE_ENV === 'development' && 'eval-source-map',
    watch : NODE_ENV === 'development',
    module:{
        loaders : [
            {
                test : /\.(js|jsx)$/,
                exclude : '/node_modules/',
                loaders : ['babel-loader']
            },
            {
                test : /\.css$/,
                exclude : '/node_modules/',
                loaders : ['style-loader','css-loader'] // appent to style tag in html
            }
        ]
    },
    plugins : [
        new webpack.DefinePlugin({
            'process.env' : {
                'NODE_ENV' : JSON.stringify(NODE_ENV)
            }
        })
    ]
}