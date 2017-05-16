var gulp = require('gulp');
var order = require("gulp-order");
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-html-minifier');

//script paths
var jsFiles = 'js/*.js',
    jsDest = 'dist/scripts',
    distDest ="../dist/";

gulp.task('minify', function() {
    gulp.src('html/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('.'))
});


gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('dist'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['minify-css', 'minify']);


gulp.task('minify-js', function() {
    return gulp.src(jsFiles)
        .pipe(order([
            "js/jquery.min.js",
            "js/jquery.easing.min.js",
            "js/bootstrap.min.js",
            "js/jquery.mixitup.min.js",
            "js/custom.js"]))
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest(jsDest));
});