var webpack = require('webpack')
module.exports = {
	entry: './src',
	output: {
		path: 'dist',
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})	
	],

	module: {
		loaders: [
			{
				test: require.resolve("jquery"),
				loader: "imports?jQuery=jquery"
			},
			{
				test: /\.js/,
				loader: 'babel',
				include: __dirname + '/src',
				exclude: /node_modules/
			},
			{
				test: /\.html/,
				loader: 'html'
			},
			{
				test: /\.css/,
				loader: 'style-loader!css-loader'
			},
			{
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
				test: /\.json/, 
        loader: 'json-loader'
      },
      {
				test: /\.(png|jpg)/, 
        loader: 'url!image-webpack'
      }
		]	
	}
}
