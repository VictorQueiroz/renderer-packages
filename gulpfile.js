var _ = require('lodash');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var wrapper = require('gulp-wrapper');

var dependencies = {
	eventemitter: {
		files: ['bower_components/eventemitter/build/eventemitter.js']
	},

	location: {
		files: ['bower_components/location/build/location.js'],
		deps: ['eventemitter']
	},

	routedriver: {
		files: ['bower_components/routedriver/build/routedriver.js'],
		deps: ['location']
	},

	'renderer-router': {
		files: ['bower_components/renderer-router/build/renderer-router.js'],
		deps: [
			'renderer',
			'routedriver'
		]
	},

	'module-router': {
		files: [
			'src/location.js',
			'src/route.js'
		],
		deps: ['renderer-router']
	},

	'renderer-moduleloader': {
		files: ['bower_components/renderer-moduleloader/build/renderer-moduleloader.js'],
		deps: [
			'renderer',
			'moduleloader'
		]
	},

	renderer: {
		files: ['bower_components/renderer/build/renderer.js']
	},

	moduleloader: {
		files: ['bower_components/moduleloader/build/moduleloader.js'],
		deps: ['injector']
	},

	injector: {
		files: ['bower_components/injector/build/injector.js']
	},

	'module-bundle': {
		files: [
			'src/module.js',
			'src/animate.js',
			'src/templateCache.js',
			'src/directives/*.js'
		],
		deps: [
			'eventemitter',
			'renderer-moduleloader'
		]
	}
};

var bundleDeps = [
	'renderer',
	'injector',
	'moduleloader',
	'renderer-moduleloader'
];

function getDepsFiles (deps, files, bundle) {
	files = files || [];
	bundle = bundle || [];

	_.forEach(deps, function(name) {
		if(!dependencies.hasOwnProperty(name)) {
			throw new Error('Unexistent required dependency: "' + name + '"');
		}
	});

	_.forEach(dependencies, function(dependency, name) {
		if(deps.indexOf(name) > -1 && bundle.indexOf(name) === -1) {
			if(dependency.deps && dependency.deps.length > 0) {
				getDepsFiles(dependency.deps, files, bundle);
			}

			_.forEach(dependency.files, function(file) {
				files.push(file);
			});
		}
	});

	return files;
}

var build = function(name, bundle, deps) {
	return gulp.src(getDepsFiles(deps, [], bundle))
	.pipe(concat(`renderer-${name}.js`))
	.pipe(wrapper({
		header: '(function(window, global) { "use strict"; ',
		footer: '}(window, window));'
	}))
	.pipe(uglify({
		mangle: 0,
		output: {
			beautify: 1
		}
	}))
	.pipe(gulp.dest('build'))
	.pipe(wrapper({
		header: '(function() {',
		footer: '}());'
	}))
	.pipe(uglify())
	.pipe(concat(`renderer-${name}.min.js`))
	.pipe(gulp.dest('build'));
};

gulp.task('build', function() {
	build('bundle', [], ['module-bundle']);

	build('bundle-no-em', bundleDeps, dependencies['module-bundle'].deps.filter(function(dep) {
		return dep !== 'eventemitter';
	}));

	build('router', bundleDeps, ['module-router']);
});