const path = require('path');

module.exports = {
    entry: './public/js/app',
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public', 'dist')
    },
}