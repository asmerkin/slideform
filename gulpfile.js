var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();


gulp.task('sass', function () {
    return gulp.src('src/scss/slideform.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp.src([
        'src/js/jquery.slideform.js'
    ])
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass', 'js'], function() {
    browserSync.init({ server: "./dist" });

    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});
