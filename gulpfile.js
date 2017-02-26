
var gulp  = require('gulp'),
	mini  = require('gulp-minify'),
	clean = require('gulp-clean-css'),
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
    .pipe(clean({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
});
