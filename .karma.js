module.exports = function(config) {
  config.set({

    basePath: './',

    frameworks: ['mocha', 'sinon-chai'],

    reporters: ['dots', 'coverage'],

    preprocessors: {
      'src/**/*.js': 'coverage'
    },

    coverageReporter: {
      type: "lcov",
      dir: "coverage/"
    },

    plugins: [
      'karma-coverage',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-sinon-chai'
    ],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false
  });
};
