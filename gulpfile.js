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
    gulp.watch('./app/src/css/**/*.scss', ['sass']);
});

// clean dist folder
gulp.task('clean', function () {
    return gulp.src('app/dist', {read: false})
        .pipe(clean());
});

// move img
gulp.task('move_img', function () {
    return gulp.src('./app/src/img/*.*')
        .pipe(gulp.dest('./app/dist/img/'))
});

// move js
gulp.task('move_js', function () {
    return gulp.src('./app/src/js/*.*')
        .pipe(gulp.dest('./app/dist/js/'))
});

// move css
gulp.task('move_css', function () {
    return gulp.src('./app/src/css/*.css')
        .pipe(gulp.dest('./app/dist/css/'))
});

// chainig default task
gulp.task('default', ['clean', 'sass', 'sass:watch', 'move_img', 'move_js', 'move_css', 'serve']);