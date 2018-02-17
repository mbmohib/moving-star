const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
    filename: 'bundle.css'
});

module.exports = {
    entry: {
        bundle: './src/js/bootstrap.js',
        vendor: './node_modules/barba.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: extractPlugin.extract({
                    use: ['css-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|woff2|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: ''
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        extractPlugin
    ]
};