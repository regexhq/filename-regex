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
  var res = str.match(re())
  return res && res[0];
}

it('should match the last part of a file path:', function () {
  assert.equal(match(''), null);
  assert.equal(match('a'), 'a');
  assert.equal(match('a/b'), 'b');
  assert.equal(match('a/b/c/d'), 'd');
  assert.equal(match('a\\b\\c\\d'), 'd');
});

it('should match a filename with an extension:', function () {
  assert.equal(match('abc/xyz.md'), 'xyz.md');
  assert.equal(match('abc\\xyz.md'), 'xyz.md');
  assert.equal(match('b.md'), 'b.md');
});

it('should match a file name that is only a dotfile or file extension:', function () {
  assert.equal(match('.md'), '.md');
  assert.equal(match('.dotfile'), '.dotfile');
  assert.equal(match('abc\\.gitignore'), '.gitignore');
  assert.equal(match('abc/.gitignore'), '.gitignore');
});

it('should match the filename when there are dots in the dirname:', function () {
  assert.equal(match('a/.b/abc.foo.min.js'), 'abc.foo.min.js');
  assert.equal(match('a/b.c.d/foo.js'), 'foo.js');
});
