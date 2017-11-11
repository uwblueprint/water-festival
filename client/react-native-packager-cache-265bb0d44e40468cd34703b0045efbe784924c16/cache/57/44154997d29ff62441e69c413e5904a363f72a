
var MAX_SAFE_INTEGER = 9007199254740991;

var reIsUint = /^(?:0|[1-9]\d*)$/;

function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;