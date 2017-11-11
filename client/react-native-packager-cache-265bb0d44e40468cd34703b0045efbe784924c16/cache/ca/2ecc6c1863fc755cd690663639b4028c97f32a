Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (colorOrBrush) {
    if (colorOrBrush === 'none' || colorOrBrush == null) {
        return null;
    }

    try {
        var matched = colorOrBrush.match(_patternReg2.default);

        if (matched) {
            return [1, matched[1]];
        } else {
            var c = new _color2.default(colorOrBrush).rgbaArray();
            return [0, c[0] / 255, c[1] / 255, c[2] / 255, c[3]];
        }
    } catch (err) {
        console.warn('"' + colorOrBrush + '" is not a valid color or brush');
        return null;
    }
};

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _patternReg = require('./patternReg');

var _patternReg2 = _interopRequireDefault(_patternReg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }