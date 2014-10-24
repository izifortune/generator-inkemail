module.exports = function (grunt) {
  'use strict';

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({

  });

  grunt.registerTask('serve', [
    'watch'
  ]);

  grunt.registerTask('default', 'serve');
};
