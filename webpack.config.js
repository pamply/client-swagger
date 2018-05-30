const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				parser: {
					amd: false
				}
			},
			{
				exclude: /(node_modules)/,
				include: __dirname,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env', 'babel-preset-react']
					}
				}
			}
		]	
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		port: 8080
	}
}