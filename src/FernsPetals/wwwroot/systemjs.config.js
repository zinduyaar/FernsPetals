/**
 * System configuration for Angular 2
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'lib/npmlibs/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            '@angular/material': 'npm:@angular/material',
            // other libraries
            'rxjs': 'npm:rxjs',

            'angular2-swiper': 'npm:angular2-swiper',
            'swiper': 'npm:swiper'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            '@angular/material': {
            format: 'cjs',
            main: 'material.umd.js'
            },
            'angular2-swiper': {
                main: 'dist/index.js',
                defaultExtension: 'js'
            },
            'swiper': {
                main: 'dist/js/swiper.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);