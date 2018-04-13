const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Compile sass and inject into browser
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});

// Merge into one css
gulp.task('merge', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build'));
});

// Watch SASS and serve
gulp.task('watch', ['sass', 'merge'], function() {
    
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/css/*.css'], ['merge']);

});

gulp.task('default', ['watch']);