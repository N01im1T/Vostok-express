const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        open: [
            'moscow/ru/index.html'//,
            // 'saint-petersburg/ru/index.html',
            // 'kazan/ru/index.html',
            // 'ekaterinburg/ru/index.html',
            // 'sochi/ru/index.html',
            // 'ufa/ru/index.html',
            // 'sevastopol/ru/index.html',
            // 'rostov-on-don/ru/index.html'
        ],
        compress: true,
        hot: true
    }
});
