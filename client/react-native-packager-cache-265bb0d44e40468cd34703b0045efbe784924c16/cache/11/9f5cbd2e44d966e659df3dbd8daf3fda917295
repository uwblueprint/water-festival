'use strict';

var ESCAPED_CHARACTERS = /(\\|\"|\')/g;

module.exports = function printString(val) {
  return val.replace(ESCAPED_CHARACTERS, '\\$1');
};