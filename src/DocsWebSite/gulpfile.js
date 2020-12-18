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
exports.default = gulp.series(copy_docsify, copy_docsify_pagination);