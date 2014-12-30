/*!
 * filename-regex <https://github.com/regexps/filename-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function filenameRegex() {
  return /([^\\\/]*?[^\\\/]*?)(\.([^\\\/]*)|$)$/;
};
