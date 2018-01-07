var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    less = require('gulp-less'),
    path = require('path');

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: '../www'
        }
    })
});

// css
gulp.task('styles', function () {
    return gulp.src('src/less/all.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(autoprefixer('last 5 versions'))
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest('src/css'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('src/css/'))
        .pipe(notify('Done!'));

});

// watch
gulp.task('watch', ['styles'],function () {
    gulp.watch('src/less/**/*less', ['styles']);
    //gulp.watch('*.html', browserSync.reload);
    //gulp.watch('js/*.js', browserSync.reload);
});

// default
//gulp.task('default', 'watch');

