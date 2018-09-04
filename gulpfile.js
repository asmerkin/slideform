var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var scsslint = require('gulp-scss-lint');
var browserSync = require('browser-sync').create();


gulp.task('sass', function () {
    return gulp.src('src/scss/slideform.scss')
        .pipe( scsslint({ config: 'scsslint.yml' }) )
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


gulp.task('copy', function () {
    return gulp.src('dist/**/*')
        .pipe( gulp.dest('docs/'))
        .pipe(browserSync.stream());
});


gulp.task('serve', ['sass', 'js'], function() {
    browserSync.init({ server: "./docs" });

    gulp.watch("src/js/*.js", ['js', 'copy']);
    gulp.watch("src/scss/*.scss", ['sass', 'copy']);
    gulp.watch("docs/*.html").on('change', browserSync.reload);
});
