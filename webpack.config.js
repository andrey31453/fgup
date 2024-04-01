const html_webpack = require('html-webpack-plugin')
const { VueLoaderPlugin: vue_loader } = require('vue-loader')
const copy_webpack = require('copy-webpack-plugin')
const webpack = require('webpack')
const tsconfig_paths = require('tsconfig-paths-webpack-plugin')
const path = require('path')

const dist = path.resolve(__dirname, './public')
const src = __dirname + '/src/'
const template = src + 'template/'

//
// rules
//

const get_rules = (dev) => [
	// vue
	{
		test: /\.vue$/,
		loader: 'vue-loader',
	},

	// ts
	{
		test: /\.ts$/,
		loader: 'ts-loader',
		exclude: /node_modules/,
		options: {
			appendTsSuffixTo: [/\.vue$/],
		},
	},

	{
		test: /\.js$/i,
		exclude: /(node_modules)/,
		use: [
			{
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
				},
			},
		],
	},

	// scss
	{
		test: /\.(scss|css|sass)$/i,
		use: [
			'style-loader',
			'css-loader',
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: [require('postcss-preset-env')],
					},
				},
			},
			{
				loader: 'sass-loader',
				options: {
					sourceMap: dev ? true : false,
				},
			},
		],
	},

	// files
	{
		test: /\.(png|jpg|webp|ico|.json)$/i,
		type: 'asset/resource',
	},

	// svg
	{
		test: /\.svg$/,
		loader: 'svg-inline-loader',
	},
]

//
// plugins
//

const get_plugins = () => [
	new webpack.DefinePlugin({
		__VUE_OPTIONS_API__: false,
		__VUE_PROD_DEVTOOLS__: false,
	}),
	new vue_loader(),
	new html_webpack({
		favicon: template + 'favicon.png',
		template: template + 'index.html',
	}),
	new copy_webpack({
		patterns: [
			{
				from: src + 'static',
				to: dist + '/assets',
			},
		],
	}),
]

//
// serve
//

const get_serve = (dev) => {
	if (!dev) return undefined

	return {
		hot: true,
		port: 8000,
		allowedHosts: 'all',
	}
}

//
// exports
//

module.exports = ({ dev }) => {
	return {
		// mode
		mode: dev ? 'development' : 'production',

		// target
		target: ['browserslist'],

		// devtool
		devtool: dev ? 'eval-source-map' : undefined,

		// devServer
		devServer: get_serve(dev),

		// entry
		entry: {
			main: src + 'main.ts',
		},

		// output
		output: {
			filename: '[name].js',
			clean: true,
			path: dist,
			assetModuleFilename: '[name][ext]',
		},

		// resolve
		resolve: {
			extensions: ['.vue', '.ts', '.js'],
			plugins: [new tsconfig_paths()],
			alias: {
				'~styles': src + 'shared/styles',
			},
		},

		// module
		module: {
			rules: get_rules(dev),
		},

		//plugins
		plugins: get_plugins(),
	}
}
