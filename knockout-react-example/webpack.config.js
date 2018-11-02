var webpack = require('webpack'),
path = require('path');

module.exports = {
	watch: true,
	cache: true,
	devtool: 'source-map',
	entry: {
		app: './app/app.jsx',
	},
	target: 'node',
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
				  presets: ['react']
				}
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
		extensions: [".ts", ".webpack.js", ".web.js", ".js", ".json", ".jsx"],
		alias: {
			"knockout": path.join(__dirname, "app/lib/knockout.debug.js")
		}
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			}
		})
	]
};
