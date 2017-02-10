/**
 * Created by BumbuKhan on 09.02.2017.
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// watch files for change and reload
gulp.task('serve', function () {
   browserSync({
       server: {
           baseDir: 'app'
       }
   });

   gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: 'app'}, reload);
});