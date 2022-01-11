const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin =  require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/',
        assetModuleFilename: 'assets/image/[hash][ext][query]',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@images': path.resolve(__dirname, 'src/assets/images'),
        }
    },
    mode: 'development',
    module: {
        rules: [
           {
               test:/\.(js|jsx)$/,
               exclude: /node_modules/,
               use: {loader: 'babel-loader'},
           },
           {
               test:/\.html$/,
               use:[{loader:'html-loader'}]
           },
           {
               test: /\.css$/,
               use:[
                   MiniCssExtractPlugin.loader,
                   'css-loader'
               ]
           },
           {
               test: /\.png/,
               type: 'asset/resource',
           },
        ],
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
        new CopyPlugin({
            patterns:[{
                from: path.resolve(__dirname, 'src', 'assets/images'),
                to: 'assets/images'
            }]
        }),
    ],
    devServer:{
        compress:true,
        port: 3005,
        historyApiFallback:true,
    }
}