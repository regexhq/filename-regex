/*!
 * filename-regex <https://github.com/regexps/filename-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var re = require('./');

it('should match the last part of a file path:', function () {
  assert.equal(re().exec('xyz')[0], 'xyz');
  assert.equal(re().exec('a/xyz')[0], 'xyz');
  assert.equal(re().exec('a/b/c/d')[0], 'd');
  assert.equal(re().exec('a/b/c/xyz')[0], 'xyz');
});

it('should match the parts in a filename:', function () {
  assert.equal(re().exec('abc/xyz.md')[0], 'xyz.md');
  assert.equal(re().exec('abc/xyz.md')[1], 'xyz');
  assert.equal(re().exec('abc/xyz.md')[2], '.md');
});

it('should match a file extension:', function () {
  assert.equal(re().exec('.md')[1], '');
  assert.equal(re().exec('.md')[1], '');
  assert.equal(re().exec('.md')[2], '.md');
});

it('should match a dotfile:', function () {
  assert.equal(re().exec('abc/.gitignore')[0], '.gitignore');
  assert.equal(re().exec('abc/.gitignore')[1], '');
  assert.equal(re().exec('abc/.gitignore')[2], '.gitignore');
});

it('should match a path with dots in the dirname:', function () {
  assert.equal(re().exec('a/.b/abc.foo.min.js')[0], 'abc.foo.min.js');
  assert.equal(re().exec('a/.b/abc.foo.min.js')[1], 'abc');
  assert.equal(re().exec('a/.b/abc.foo.min.js')[2], '.foo.min.js');
});
