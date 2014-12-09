'use strict';

var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    karma   = require('gulp-karma'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat')
;

var paths = {
  dist: './dist/'
};

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
             .pipe( karma({ configFile: files.karmaConfig, action: 'run' }) );
});

gulp.task('compile', ['lint', 'test'], function () {
  return gulp.src(files.src)
             .pipe( concat('angular-calvin-hobbes.min.js') )
             .pipe( uglify() )
             .pipe( gulp.dest( paths.dist ) );
});
