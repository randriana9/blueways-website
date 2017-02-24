var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');
    pug = require('gulp-pug');
var bs = require('browser-sync').create();



    gulp.task('build', ['pug-compile', 'styles-to-dist', 'copy-vendors-to-dist', 'copy-images']);

    gulp.task('pre-build', function() {
        /* top files */
         gulp.src('views/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('pre-build'));

        /* includes files */
        gulp.src('views/includes/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('pre-build'));

        /* english files */
        gulp.src('views/lang-en/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('pre-build'));

        /* french files */
        gulp.src('views/lang-fr/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('pre-build'));

        /* layouts files */
        gulp.src('views/layouts/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('pre-build'));
    })

    gulp.task('pug-compile', function() {
        /* top files */
         gulp.src('pre-build/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'));
    })

    gulp.task('styles-to-dist', function() {
        return gulp.src('./src/sass/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('dist/stylesheets'))
    })

    gulp.task('copy-images', function() {
        return gulp.src('public/images/**/*.*')
                .pipe(gulp.dest('dist/images'))
    })

    gulp.task('copy-vendors-to-dist', function() {
        /* copy bootstrap javascripts */
        gulp.src(['node_modules/bootstrap-sass/assets/javascripts/**'])
        .pipe(gulp.dest('dist/javascripts/bootstrap'));

         /* copy bootstrap stylesheets */
        gulp.src(['node_modules/bootstrap-sass/assets/stylesheets/**'])
        .pipe(gulp.dest('dist/stylesheets/bootstrap'));

        /* copy fullpage.js stylesheets */
        gulp.src(['node_modules/fullpage.js/dist/jquery.fullpage.min.css', 'node_modules/fullpage.js/dist/jquery.fullpage.css'])
        .pipe(gulp.dest('dist/stylesheets/fullpage.js'));

        /* copy fullpage.js javascripts */
        gulp.src(['node_modules/fullpage.js/dist/jquery.fullpage.min.js', 'node_modules/fullpage.js/dist/jquery.fullpage.js'])
        .pipe(gulp.dest('dist/javascripts/fullpage.js'));

        /* copy scrollreveal */
        gulp.src(['node_modules/scrollreveal/dist/scrollreveal.min.js'])
        .pipe(gulp.dest('dist/javascripts/scrollreveal'));

        gulp.src('public/javascripts/jquery-custom-plugins.js')
        .pipe(gulp.dest('dist/javascripts'));

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

        /* copy query 
        gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('public/javascripts/jquery'));
        */

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