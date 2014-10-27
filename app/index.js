'use strict';
var util = require('util');
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var inkUtils = require('../utils');

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
      },
      {
        type: 'list',
        name: 'template',
        message: 'Which template would you like to use?',
        choices: _.pluck(inkUtils.starters.templates, 'name')
      }
    ];



    this.prompt(prompts, function (props) {

      _.each(props, function(val, key) {
        this['_'+key] = val;
      }, this);

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
    },

    template: function () {
      this.template('email/' + this._template.filename, 'app/index.html');
    },
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = InkemailGenerator;
