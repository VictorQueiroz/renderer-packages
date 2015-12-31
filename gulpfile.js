var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var wrapper = require('gulp-wrapper');

var simpleDeps = [
	'src/module.js',
	'src/*.js'
];
var bowerDeps = [
	'bower_components/eventemitter/build/eventemitter.js',
	'bower_components/injector/build/injector.js',
	'bower_components/moduleloader/build/moduleloader.js',
	'bower_components/routedriver/build/routedriver.js',
	'bower_components/location/build/location.js',

	'bower_components/renderer/build/renderer.js',
	'bower_components/renderer-router/build/renderer-router.js',
	'bower_components/renderer-moduleloader/build/renderer-moduleloader.js',
];

gulp.task('build', function() {
	// bundle (all dependencies package)
	gulp.src(bowerDeps.concat(simpleDeps))
	.pipe(concat('renderer-bundle.js'))
	.pipe(wrapper({
		header: '(function(window, global) {',
		footer: '}(window, window));'
	}))
	.pipe(uglify())
	.pipe(gulp.dest('build'));
});