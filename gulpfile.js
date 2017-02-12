/**
 * Created by BumbuKhan on 09.02.2017.
 */
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');

// watch files for change and reload
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: 'app'}, reload);
});

// compile from SCSS to CSS
gulp.task('sass', function () {
    return gulp.src('./app/css/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/css/sass/**/*.scss', ['sass']);
});