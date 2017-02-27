
var gulp  = require('gulp'),
	mini  = require('gulp-minify'),
	clean = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	sass  = require('gulp-sass');
	paths = {
		'style': {
			sass: './src/scss/*.scss',
			output: './src/css'
		}
	};

gulp.task('sass', function () {

	gulp.src(paths.style.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.style.output));
});

gulp.task('clean', function() {

  return gulp.src('./src/css/*.css')
    .pipe(clean({
		compatibility: 'ie8'
	}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify', function() {

  return gulp.src('./src/js/*.js')
    .pipe(mini({
		ext: {
			min: '.min.js'
		},
		mangle: true
	}))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('concat', function () {

	gulp.src([
		'./node_modules/mk-ui/dist/js/core.min.js',
		'./dist/js/nav.min.js'
	])
	.pipe(concat('lib.js'))
	.pipe(gulp.dest('./dist/js'))
});
