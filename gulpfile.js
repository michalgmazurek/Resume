var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourceMaps = require('gulp-sourcemaps');

gulp.task('sass', () => {
	return gulp.src('scss/**/*.scss')
		.pipe(sourceMaps.init())
		.pipe(sass({outputStyle:'expanded',
		includePaths: require('node-normalize-scss').includePaths}))
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({
      		stream: true
    }));
});

gulp.task('browserSync', () => {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', ['browserSync', 'sass'], () => {
	gulp.watch('scss/**/*.scss', ['sass'], browserSync.reload);
	gulp.watch('./*.html', browserSync.reload);
});
