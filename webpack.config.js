const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
    const mode = argv.mode || 'production'
    const isDevelopment = mode === 'development'

    return ({
        mode,
        entry: './src/index.jsx',
        devServer: {
            historyApiFallback: true
        },
        output: {
            publicPath: isDevelopment ? '/' : '/x-realms-counter',
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [
                path.resolve(__dirname, './node_modules'),
                path.resolve(__dirname, './src')
            ],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                // style modules
                {
                    test: /\.sass$/i,
                    use: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: '[name]__[local]--[hash:base64:5]',
                                },
                            },
                        },
                        'sass-loader',
                    ],
                    include: /\.module\.sass$/,
                },
                // normal styles
                {
                    test: /\.sass$/i,
                    use: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                    exclude: /\.module\.sass$/,
                },
                // normal css
                {
                    test: /\.css$/i,
                    use: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                    ]
                },
                {
                    test: /\.(png|jpg|gif|xml)$/i,
                    type: 'asset/resource'
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({template: './src/index.html'}),
            new MiniCssExtractPlugin()
        ]
    })
}
