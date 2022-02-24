var gulp = require('gulp');

function copy_docsify() {
    return gulp
        .src("node_modules/docsify/lib/**/*")
        .pipe(gulp.dest("wwwroot/libs/docsify"));
}

function copy_docsify_pagination() {
    return gulp
        .src("node_modules/docsify-pagination/dist/*.js")
        .pipe(gulp.dest("wwwroot/libs/docsify-pagenation"))
}

function copy_docsify_print() {
    return gulp
        .src("node_modules/docsify-print/dist/*.*")
        .pipe(gulp.dest("wwwroot/libs/docsify-print"))
}

function copy_print_js() {
    return gulp
        .src("node_modules/print-js/dist/*.*")
        .pipe(gulp.dest("wwwroot/libs/printjs"))
}

exports.default = gulp.series(copy_docsify, copy_docsify_pagination, copy_docsify_print, copy_print_js);