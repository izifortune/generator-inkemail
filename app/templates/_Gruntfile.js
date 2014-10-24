module.exports = function (grunt) {
  'use strict';

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
      },
      sass: {
        files: ['<%= yeoman.app %>/styles/**/*.{scss,sass}'],
        tasks: ['sass:dev'] //'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
        '<%= yeoman.app %>/*.html',
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dev: {
        files: {
          '.tmp/main.css': '<%= yeoman.app %>/styles/main.scss'
        }
      }
    }

  });

  grunt.registerTask('serve', [
    'watch'
  ]);

  grunt.registerTask('default', 'serve');
};
