const { BlockList } = require('net');
const path = require('path');

module.exports = {
    entry: './blocks/index.js',
    output: {
        filename: 'blocks.js',
        path:path.resolve(__dirname, 'build/js'),
        clean: true
    },
    module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /{node_modules}/,
				use: {
					loader: 'babel-loader',
				},
			},
		]
	},
};