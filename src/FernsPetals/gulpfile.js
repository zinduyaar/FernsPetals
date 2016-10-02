"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    sass = require('gulp-sass');

var webroot = "./wwwroot/";
var appScripts = "./AppScripts/";

var paths = {
    js: webroot + "js/**/*.js",
    minJs: webroot + "js/**/*.min.js",
    css: webroot + "css/**/*.css",
    minCss: webroot + "css/**/*.min.css",
    concatJsDest: webroot + "js/site.min.js",
    concatCssDest: webroot + "css/site.min.css",
    partialHtml: "**/*.html",
    scss: "**/*.scss"
};

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("copy-npmlibs", () => {
    gulp.src([
           
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'core-js/client/shim.min.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'angular2-swiper/**',
            'swiper/**'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./wwwroot/lib/npmlibs"));
});

gulp.task("copy-partial-htmls", () => {
    gulp.src(paths.partialHtml,{cwd:appScripts})
        .pipe(gulp.dest(webroot+'app/'));
});



gulp.task('sass', function() {
  return gulp.src(paths.scss,{cwd:appScripts}) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest(webroot+'app/'))
})

//Watch task
gulp.task('default',function() {
    gulp.watch(appScripts+paths.scss,['sass']);
    gulp.watch(appScripts+paths.partialHtml,['copy-partial-htmls']);
});