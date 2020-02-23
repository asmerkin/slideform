let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.sass('src/scss/slideform.scss', 'dist/css/slideform.css')
    .options({ processCssUrls: false })
    .combine('src/js/**/*.js', 'dist/js/slideform.js')
    .copy('src/fonts/*', 'dist/fonts/');
