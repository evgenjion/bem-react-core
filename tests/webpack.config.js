const path = require('path'),
    bemLoader = require.resolve('../webpack/bem-loader');

const jsLoaders = [bemLoader, 'babel'];

module.exports = {
    entry : `${__dirname}/desktop.bundles/index/index.js`,
    output : {
        path : `${__dirname}/desktop.bundles/index/`,
        publicPath : `/desktop.bundles/index/`,
        filename : '_index.js'
    },
    module : {
        loaders: [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loaders : jsLoaders
            },
            {
                test : /\.css$/,
                loaders : ['style', 'css']
            }
        ]
    },
    resolve : {
        alias : {
            'bem-react-core' : require.resolve('../')
        },
        modules : [
            path.resolve(__dirname, '../node_modules')
        ]
    },
    bemLoader : {
        techs : ['js', 'css'], // NOTE: order is very important! JS first!!
        levels : [
            `${__dirname}/common.blocks`,
            `${__dirname}/desktop.blocks`
        ]
    }
};
