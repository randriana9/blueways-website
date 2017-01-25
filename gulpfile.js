var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');
var bs = require('browser-sync').create();


    gulp.task('sass', function() {
        return gulp.src('./src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/stylesheets'));
    })

    gulp.task('browser-sync', function() {
        bs.init({
            proxy: "http://localhost:3000"
        })
    })

    gulp.task('reload', function() {
        bs.reload();
    })

    gulp.task('default', ['browser-sync'],function() {
        gulp.watch('./src/sass/*.scss', ['sass', 'reload']);
        gulp.watch('./views/**/*.html', ['reload']);
    })