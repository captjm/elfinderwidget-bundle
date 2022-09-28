const path = require('path');

module.exports = {
    entry: './assets/js/ELFinderWidget.js',
    output: {
        filename: 'ELFinderWidget.js',
        path: path.resolve(__dirname, './public'),
        clean: true,
    },
    mode: 'development'
};