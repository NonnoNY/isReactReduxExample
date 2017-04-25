///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack 
///////////////////////////////////////////////////////////////////////////////////////////////////

const resolve = require('path').resolve;
const webpack = require('webpack');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './src/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: resolve(__dirname, './src'),
        filename: 'bundle.js',
        publicPath: './'
    },
    resolve: {
        alias: {
            main: './app/components/main.jsx',
            appStyles: './app/styles/app.scss'
        },

        extensions: [".js", ".jsx", ".js"]
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    watchOptions: {
        poll: true
    }
}