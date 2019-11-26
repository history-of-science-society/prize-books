const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');

exports.css = () => {
    return gulp.src('src/*.css')
        .pipe(autoprefixer())
        .pipe(clean())
        .pipe(gulp.dest('dist'))
}