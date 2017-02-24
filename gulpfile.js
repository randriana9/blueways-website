var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');
    pug = require('gulp-pug');
var bs = require('browser-sync').create();


    gulp.task('pug-compile', function() {
        return gulp.src('views/**/*.pug')
        .pipe(pug({}))
         .pipe(gulp.dest('dist/views'));
    })

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
        gulp.watch('./views/**/*.pug').on('change', bs.reload);
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

        /* copy fullpage.js stylesheets */
        gulp.src(['node_modules/fullpage.js/dist/jquery.fullpage.min.css', 'node_modules/fullpage.js/dist/jquery.fullpage.css'])
        .pipe(gulp.dest('public/stylesheets/fullpage'));

        /* copy fullpage.js javascripts */
        gulp.src(['node_modules/fullpage.js/dist/jquery.fullpage.min.js', 'node_modules/fullpage.js/dist/jquery.fullpage.js'])
        .pipe(gulp.dest('public/javascripts/fullpage.js'));

        /* copy scrollreveal */
        gulp.src(['node_modules/scrollreveal/dist/scrollreveal.min.js'])
        .pipe(gulp.dest('public/javascripts/scrollreveal'));
    })