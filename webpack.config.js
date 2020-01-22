const path = require('path');

module.exports = {
    entry: {
        popup: path.resolve(__dirname, 'src', 'popup', 'index.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build', 'popup'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                }
            }
        ]
    }
};