var Symbol = require('./_Symbol');

var symbolProto = Symbol ? typeof Symbol === 'function' ? Symbol.prototype : '@@prototype' : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;