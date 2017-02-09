
var gulp  = require('gulp'),
	sass  = require('gulp-sass');
	paths = {
		'style': {
			sass: './app/scss/*.scss',
			output: './dist/css'
		}
	};

gulp.task('sass', function () {

	gulp.src(paths.style.sass)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.style.output));
});
