const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

var config = {
    module: {},
};

var yasrFront    = Object.assign({}, config, {
    mode: 'development',
    entry: {
        'includes/js/yasr-globals': [
            './includes/js/src/global_functions/yasrTrueFalseStringConvertion.js',
            './includes/js/src/global_functions/yasrValidJson.js',
            './includes/js/src/global_functions/rater-js-src.js',
            './includes/js/src/global_functions/yasrSetRaterValue.js'
        ],
        'includes/js/shortcodes/overall-multiset': './includes/js/src/shortcodes/overall-multiset.js',
        'includes/js/shortcodes/visitorVotes': './includes/js/src/shortcodes/visitorVotes.js',
        'includes/js/shortcodes/yasr-log-users-frontend': './includes/js/src/shortcodes/yasr-log-users-frontend.js',

        'yasr_pro/js/reviewsInComments': [
            './yasr_pro/js/src/reviewsInComments.js',
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./')
    }
});

var yasrFrontBabel  = Object.assign({}, config, {
    mode: 'development',
    entry: {
        './shortcodes/rankings': './includes/js/src/shortcodes/ranking.js',
        './catch-inifite-scroll': './includes/js/src/catch-inifite-scroll.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.css']
    },
    output: {
        filename: '[name].js',
        path: path.resolve('includes/js/')
    }
});

module.exports   = [yasrFront, yasrFrontBabel];