var gulp = require('gulp');
var order = require("gulp-order");
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

//script paths
var jsFiles = 'js/*.js',
    jsDest = 'dist/scripts';


gulp.task('minify-css', function() {
    return gulp.src('./css/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('dist/css'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'images']);


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