'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('React Simple Component Generator') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'Component name',
      required: true,
      default: this.args[0]
    }];

    this.prompt(prompts, function(props) {

      this.componentName = props.componentName;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    component: function() {
      this.mkdir(this.componentName);

      var context = {componentName:this.componentName};

      this.destinationRoot(this.componentName);

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('_Component.js'),
        this.destinationPath(this.componentName + '.js'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('_Component.less'),
        this.destinationPath(this.componentName + '.less'),
        context
      );
    }
  },

  install: function() {
    this.npmInstall();
  }
});
