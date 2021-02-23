export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'The Ask Programming Language',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{
				hid: 'description',
				name: 'description',
				content: 'Ask is a modern, open source, dynamic, and transpiled programming language designed for building backend services and APIs. Ask reduces the amount of boilerplate code for setting up thing like database connections and authentication to virtually zero lines. Ask directly transpiles to Python, more specifically to Flask.'
			},
			{name: 'author', content: 'Edvard Busck-Nielsen'}
		],
		link: [{rel: 'icon', type: 'image/x-icon', href: '/icon.png'}],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/css/flexboxgrid/flexboxgrid.min.css',
		'@fortawesome/fontawesome-svg-core/styles.css',
		'@/assets/css/global.css',
		'@/assets/css/buttons.css',
		'@/assets/css/colors.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/helpers.js',
		{
			src: '~/plugins/ga.js',
			mode: 'client'
		},
		{
			src: "@/plugins/aos",
			mode: "client"
		},
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/pwa',
		'nuxt-fontawesome',
		'nuxt-webfontloader',
	],

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'en',
		},
	},

	fontawesome: {
		imports: [
			{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['fas']
			},
			{
				set: '@fortawesome/free-brands-svg-icons',
				icons: ['fab']
			},
		],
	},

	webfontloader: {
		custom: {
			families: 'Roboto Slab',
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	server: {
		host: "0.0.0.0"
	}
}
