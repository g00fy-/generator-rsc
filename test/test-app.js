'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('rsc generator', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ componentName: 'MyComponent' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      'MyComponent.js',
      'MyComponent.less'
    ]);
  });
});
