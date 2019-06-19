'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

class BlockstackWebpackGenerator extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Blockstack') + ' app generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Are you ready to build a Blockstack app?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer
      this.props = props;
    }.bind(this));
  }

  writing() {
    this.fs.copy(
      this.templatePath('_package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('netlify.toml'),
      this.destinationPath('netlify.toml')
    );
    this.fs.copy(
      this.templatePath('firebase.json'),
      this.destinationPath('firebase.json')
    );
    this.fs.copy(
      this.templatePath('amplify.yml'),
      this.destinationPath('amplify.yml')
    );
    // styles
    this.fs.copy(
      this.templatePath('dist/app.css'),
      this.destinationPath('dist/app.css')
    );
    this.fs.copy(
      this.templatePath('dist/bootstrap.min.css'),
      this.destinationPath('dist/bootstrap.min.css')
    );
    // images
    this.fs.copy(
      this.templatePath('dist/icon-192x192.png'),
      this.destinationPath('dist/icon-192x192.png')
    )
    // html
    this.fs.copy(
      this.templatePath('dist/index.html'),
      this.destinationPath('dist/index.html')
    );
    // publicExtras
    this.fs.copy(
      this.templatePath('dist/robots.txt'),
      this.destinationPath('dist/robots.txt')
    );
    this.fs.copy(
      this.templatePath('dist/manifest.json'),
      this.destinationPath('dist/manifest.json')
    );
    // scripts
    this.fs.copy(
      this.templatePath('src/index.js'),
      this.destinationPath('src/index.js')
    );
  }

  install() {
    this.installDependencies({
      bower: false
    });
  }
}

module.exports = BlockstackWebpackGenerator;
