const gulp = require('gulp');

function copyDocsifyLib() {
    return gulp
        .src("node_modules/docsify/lib/**/*")
        .pipe(gulp.dest("wwwroot/libs/docsify/lib"));
}

function copyDocsifyThemes() {
    return gulp
        .src("node_modules/docsify/themes/**/*")
        .pipe(gulp.dest("wwwroot/libs/docsify/themes"))
}

function copyDocsifyToc() {
    return gulp
        .src("node_modules/docsify-toc/dist/**/*")
        .pipe(gulp.dest("wwwroot/libs/docsify-toc"))
}
exports.default = gulp.series(copyDocsifyLib, copyDocsifyThemes,copyDocsifyToc);