const path = require('path')
const webpack = require('webpack')
const dirVars = require('../base/dirVars.config.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pluginsConfig = [
	new ExtractTextPlugin('[name]/styles.[contenthash:8].css'),
	new webpack.ProvidePlugin({
		React: 'react',
		ReactDOM: 'react-dom',
		PropTypes: 'prop-types',
		skrollr: 'vendorDir/skrollr.min.js',
	}),
]

pluginsConfig.push(new HtmlWebpackPlugin({
	filename: 'index.html',
	template: path.resolve(dirVars.appDir, 'index.html'),
	chunks: ['runtime', 'vendor', 'index'],
}))

module.exports = pluginsConfig
