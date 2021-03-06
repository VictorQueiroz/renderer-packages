// Karma configuration
// Generated on Thu Dec 31 2015 03:00:40 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

	// base path that will be used to resolve all patterns (eg. files, exclude)
	basePath: '',


	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['jasmine'],


	// list of files / patterns to load in the browser
	files: [
		'bower_components/eventemitter/build/eventemitter.js',
		'bower_components/injector/build/injector.js',
		'bower_components/moduleloader/build/moduleloader.js',
		'bower_components/routedriver/build/routedriver.js',
		'bower_components/location/build/location.js',

		'bower_components/renderer/build/renderer.js',
		'bower_components/renderer-router/build/renderer-router.js',
		'bower_components/renderer-moduleloader/build/renderer-moduleloader.js',
		
	  'src/module.js',
	  'src/*.js',
	  'test/*.js'
	],


	// list of files to exclude
	exclude: [
	],


	// preprocess matching files before serving them to the browser
	// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
	},


	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['progress'],


	// web server port
	port: 9876,


	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: true,


	// start these browsers
	// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	browsers: ['Chrome'],


	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: false,

	// Concurrency level
	// how many browser should be started simultaneous
	concurrency: Infinity
  })
}
