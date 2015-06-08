/**
 * Created by PetrBorak on 7. 6. 2015.
 */
var gulp = require('gulp');
var bower = require('gulp-bower');
var includeSources = require('gulp-include-source');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

gulp.task('bower',function(){
    return bower().pipe(gulp.dest('lib/'))
})

gulp.task('templates',function(){
        gulp.src('./templates/**/*.jade').pipe(jade({

        }))
            .pipe(gulp.dest('./app/views/'))
});

gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/assets/stylesheet'));
});

gulp.task('html',function(){
    return gulp.src('./index.html')
        .pipe(includeSources({cwd:'./app/'}))
        .pipe(gulp.dest('./app/'))
})

gulp.task('default',function(){
    'bower',
    'templates',
    'sass',
    'html'
})