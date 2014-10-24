'use strict';
var util = require('util');
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var InkemailGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the perfect Inkemail generator!'
    ));

    var prompts = [
      {
        name: 'projectName',
        message: 'What is the name of your project?',
        default: 'My Email'
      }
    ];



    this.prompt(prompts, function (props) {

      _.each(props, function(val, key) {
        this[key] = val;
      }, this);

      this._projectName = this.projectName;
      this.log(this.projectName);

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('app');

      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');
      this.src.copy('_Gruntfile.js', 'Gruntfile.js');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    },

    styles: function() {
      this.directory('styles', 'app/styles');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = InkemailGenerator;
