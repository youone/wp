const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
          port: 5555,
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      plugins: [
    new HtmlWebpackPlugin()
],
}

module.exports = (env) => {
    return config;
}