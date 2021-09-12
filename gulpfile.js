const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
	// look in the sass folder for any .scss file or subfolder (indicated by **) containing .scss files
	return src('sass/**/*.scss')
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(purgecss({ content: ['*.html'] }))
		.pipe(dest('css'));
}

function watchTask() {
	watch(['sass/**/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
