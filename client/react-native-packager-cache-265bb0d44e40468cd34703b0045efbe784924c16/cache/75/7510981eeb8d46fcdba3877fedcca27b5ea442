Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props, styleProperties) {
    strokeKeys.forEach(function (name) {
        if (props.hasOwnProperty(name)) {
            styleProperties.push(name);
        }
    });

    var stroke = props.stroke;

    var strokeWidth = +props.strokeWidth;
    var strokeDasharray = props.strokeDasharray;

    if (typeof strokeDasharray === 'string') {
        strokeDasharray = strokeDasharray.split(separator).map(function (dash) {
            return +dash;
        });
    }

    if (strokeDasharray && strokeDasharray.length === 1) {
        strokeDasharray.push(strokeDasharray[0]);
    }

    return {
        stroke: (0, _extractBrush2.default)(stroke),
        strokeOpacity: (0, _extractOpacity2.default)(props.strokeOpacity),
        strokeLinecap: caps[props.strokeLinecap] || 0,
        strokeLinejoin: joins[props.strokeLinejoin] || 0,
        strokeDasharray: strokeDasharray || null,
        strokeWidth: strokeWidth || null,
        strokeDashoffset: strokeDasharray ? +props.strokeDashoffset || 0 : null,
        strokeMiterlimit: props.strokeMiterlimit || 4
    };
};

var _extractBrush = require('./extractBrush');

var _extractBrush2 = _interopRequireDefault(_extractBrush);

var _extractOpacity = require('./extractOpacity');

var _extractOpacity2 = _interopRequireDefault(_extractOpacity);

var _props = require('../props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var separator = /\s*,\s*/;

var caps = {
    butt: 0,
    square: 2,
    round: 1
};

var joins = {
    miter: 0,
    bevel: 2,
    round: 1
};

var strokeKeys = Object.keys(_props.strokeProps);