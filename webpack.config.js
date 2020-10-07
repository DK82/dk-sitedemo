const path = require('path');

module.exports = [
    
    {
        entry: './src/apiSendgrid/index.js',
        output: {
            path: path.resolve(__dirname, './.dist/apiSendgrid'),
            filename: 'index.js',
            libraryTarget: 'commonjs'
        },
        externals: {
            'aws-sdk': 'aws-sdk' 
        },
        target: 'node',
        mode: 'development'
    },
    {
        entry: './src/apiMailgun/index.js',
        output: {
            path: path.resolve(__dirname, './.dist/apiMailgun'),
            filename: 'index.js',
            libraryTarget: 'commonjs'
        },
        externals: {
            'aws-sdk': 'aws-sdk'
        },
        target: 'node',
        mode: 'development'
    },
    {
        entry: './src/mailHandler/index.js',
        output: {
            path: path.resolve(__dirname, './.dist/mailHandler'),
            filename: 'index.js',
            libraryTarget: 'commonjs'
        },
        externals: {
            'aws-sdk': 'aws-sdk'
        },
        target: 'node',
        mode: 'development'
    }
    

]