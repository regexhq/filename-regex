/*!
 * filename-regex <https://github.com/regexps/filename-regex>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var re = require('./');

function match(str) {
  return str.match(re());
}

it('should match the last part of a file path:', function () {
  assert.equal(match('')[0], '');
  assert.equal(match('a')[0], 'a');
  assert.equal(match('a/b')[0], 'b');
  assert.equal(match('a/b/c/d')[0], 'd');
  assert.equal(match('a/b/c/d')[1], 'd');
  assert.equal(match('a/b/c/d')[2], '');
  assert.equal(match('a/b/c/d')[3], null);
  assert.equal(match('a/b/c/d')[4], null);
});

it('should match the parts in a filename:', function () {
  assert.equal(match('abc/xyz.md')[0], 'xyz.md');
  assert.equal(match('abc/xyz.md')[1], 'xyz');
  assert.equal(match('abc/xyz.md')[2], '.md');
  assert.equal(match('abc/xyz.md')[3], '.md');
  assert.equal(match('abc/xyz.md')[4], 'md');
});

it('should match a file extension:', function () {
  assert.equal(match('.md')[0], '.md');
  assert.equal(match('.md')[1], '');
  assert.equal(match('.md')[2], '.md');
  assert.equal(match('.md')[3], '.md');
  assert.equal(match('.md')[4], 'md');
});

it('should match a dotfile:', function () {
  assert.equal(match('abc/.gitignore')[0], '.gitignore');
  assert.equal(match('abc/.gitignore')[1], '');
  assert.equal(match('abc/.gitignore')[2], '.gitignore');
  assert.equal(match('abc/.gitignore')[3], '.gitignore');
  assert.equal(match('abc/.gitignore')[4], 'gitignore');
});

it('should match a path with dots in the dirname:', function () {
  assert.equal(match('a/.b/abc.foo.min.js')[0], 'abc.foo.min.js');
  assert.equal(match('a/.b/abc.foo.min.js')[1], 'abc');
  assert.equal(match('a/.b/abc.foo.min.js')[2], '.foo.min.js');
  assert.equal(match('a/.b/abc.foo.min.js')[3], '.js');
  assert.equal(match('a/.b/abc.foo.min.js')[4], 'js');
});
