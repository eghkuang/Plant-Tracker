module.exports = {
    entry: '/client/src/index.jsx',
    output: {
        path: __dirname + '/client/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        static: './'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader'] // include eslint-loader
        }]
    }
};
