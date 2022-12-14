const path = require('path');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')
const config = {
 
 // tell webpack for root file of our server Application
 entry: './src/client/client.js',
 // tell webpack where to put put the output file that is generated
 output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
 },

};

module.exports = merge(baseConfig, config);