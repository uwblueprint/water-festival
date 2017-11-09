var freeGlobal = require('./_freeGlobal');

var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

var moduleExports = freeModule && freeModule.exports === freeExports;

var freeProcess = moduleExports && freeGlobal.process;

var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;