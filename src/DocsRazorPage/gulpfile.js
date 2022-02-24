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

function copyPrismThemes() {
    return gulp
        .src("node_modules/prismjs/themes/**/*")
        .pipe(gulp.dest("wwwroot/libs/prismjs/themes"))
}

function copyPrismComponents() {
    return gulp
        .src("node_modules/prismjs/components/**/*")
        .pipe(gulp.dest("wwwroot/libs/prismjs/components"))
}

function copyPrismPlugins() {
    return gulp
        .src("node_modules/prismjs/plugins/**/*")
        .pipe(gulp.dest("wwwroot/libs/prismjs/plugins"))
}
function copyDocsifyCopyCode() {
    return gulp
        .src("node_modules/docsify-copy-code/dist/**/*")
        .pipe(gulp.dest("wwwroot/libs/docsify-copy-code"))
}
function copyDocsifyBackToTop() {
    return gulp
        .src("node_modules/docsify-back-to-top/dist/**/*")
        .pipe(gulp.dest("wwwroot/libs/docsify-back-to-top"))
}
function copyDocsifyPrism() {
    return gulp
        .src("node_modules/docsify-prism/dist/**/*")
        .pipe(gulp.dest("wwwroot/libs/docsify-prism"))
}

function copyDocsifyScrollToTop() {
    return gulp
        .src("node_modules/docsify-scroll-to-top/dist/**/*")
        .pipe(gulp.dest("wwwroot/libs/docsify-scroll-to-top"))
}
exports.default = gulp.series(copyDocsifyLib, copyDocsifyThemes, copyDocsifyToc, copyPrismThemes, copyPrismComponents, copyPrismPlugins,
    copyDocsifyCopyCode,copyDocsifyBackToTop, copyDocsifyPrism, copyDocsifyScrollToTop);