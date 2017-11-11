var Symbol = require('./_Symbol'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray');

var spreadableSymbol = Symbol ? typeof Symbol === 'function' ? Symbol.isConcatSpreadable : '@@isConcatSpreadable' : undefined;

function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;