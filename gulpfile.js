'use strict';

var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    karma   = require('gulp-karma')
;

var files = {
  gulpfile: './gulpfile.js',
  src:      './src/**/*.js',
  test:     './test/**/*.mocha.js',
  karmaConfig: './.karma.js',
  angular:  ['./bower_components/angular/angular.js',
             './bower_components/angular-mocks/angular-mocks.js']
};

var jshintConfig = {
  "predef":     [ "angular", "require" ],
  "camelcase":  true,
  "unused":     true,
  "strict":     true
};

gulp.task('lint', function () {
  return gulp.src([ files.src, files.test ])
             .pipe( jshint(jshintConfig) )
             .pipe( jshint.reporter('default') );
});

gulp.task('test', function () {
  var testFiles = files.angular.concat([files.src, files.test]);
  return gulp.src( testFiles )
             .pipe( karma({ configFile: files.karmaConfig, action: 'watch' }) );
});
