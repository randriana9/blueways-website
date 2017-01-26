var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');
var bs = require('browser-sync').create();


    gulp.task('sass', function() {
        return gulp.src('./src/sass/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./public/stylesheets'))
            .pipe(bs.stream());
    })

    gulp.task('serve', ['sass'],function() {

        bs.init({
            proxy: "http://localhost:3000"
        });

        gulp.watch('./src/sass/**/*.*', ['sass']);
        gulp.watch('./views/**/*.html').on('change', bs.reload);
    })

    gulp.task('default', ['serve'],function() {

    })

    gulp.task('copy', function() {

        /* copy query */
        gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('public/javascripts/jquery'));

        /* copy bootstrap javascripts */
        gulp.src(['node_modules/bootstrap-sass/assets/javascripts/**'])
        .pipe(gulp.dest('public/javascripts/bootstrap'));

         /* copy bootstrap stylesheets */
        gulp.src(['node_modules/bootstrap-sass/assets/stylesheets/**'])
        .pipe(gulp.dest('public/stylesheets/bootstrap'));
    })