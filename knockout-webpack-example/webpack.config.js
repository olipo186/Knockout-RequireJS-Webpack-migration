var webpack = require('webpack'),
path = require('path');

module.exports = {
	watch: true,
	cache: true,
	devtool: 'source-map',
	entry: {
		app: './app/app.js',
	},
	target: 'node',
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					visualStudioErrorFormat: true
				}
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		publicPath: 'build/'
	},
	resolve: {
		
		modules: [path.resolve('.'), '.'],
		extensions: [".ts", ".webpack.js", ".web.js", ".js", ".json"],
		alias: {
			"knockout": path.join(__dirname, "app/lib/knockout.js")
		}
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin()
	]
};
