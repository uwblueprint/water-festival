Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props, styleProperties) {
    fillKeys.forEach(function (name) {
        if (props.hasOwnProperty(name)) {
            styleProperties.push(name);
        }
    });

    return {
        fill: (0, _extractBrush2.default)(props.fill == null ? '#000' : props.fill),
        fillOpacity: (0, _extractOpacity2.default)(props.fillOpacity),
        fillRule: fillRules[props.fillRule] === 0 ? 0 : 1
    };
};

var _extractBrush = require('./extractBrush');

var _extractBrush2 = _interopRequireDefault(_extractBrush);

var _extractOpacity = require('./extractOpacity');

var _extractOpacity2 = _interopRequireDefault(_extractOpacity);

var _props = require('../props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fillRules = {
    evenodd: 0,
    nonzero: 1
};

var fillKeys = Object.keys(_props.fillProps);