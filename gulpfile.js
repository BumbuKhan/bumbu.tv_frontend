/**
 * Created by BumbuKhan on 09.02.2017.
 */
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');

// watch files for change and reload
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(['*.html', 'dist/css/**/*.css', 'dist/js/**/*.js'], {cwd: 'app'}, reload);
});

// compile from SCSS to CSS
gulp.task('sass', function () {
    return gulp.src('./app/src/css/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/dist/css'));
});

// watch after *.scss
gulp.task('sass:watch', function () {
    gulp.watch('./app/css/**/*.scss', ['sass']);
});

// clean dist folder
gulp.task('clean', function () {
    return gulp.src('app/dist', {read: false})
        .pipe(clean());
});

// chainig default task
gulp.task('default', ['clean', 'sass', 'sass:watch', 'serve']);