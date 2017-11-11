Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    var clipPath = props.clipPath,
        clipRule = props.clipRule;

    var clipPathProps = {};

    if (clipPath) {
        clipPathProps.clipRule = clipRules[clipRule] === 0 ? 0 : 1;

        var matched = clipPath.match(_patternReg2.default);

        if (matched) {
            clipPathProps.clipPath = matched[1];
        } else {
            console.warn('Invalid `clipPath` prop, expected a clipPath like `"#id"`, but got: "' + clipPath + '"');
        }
    }

    return clipPathProps;
};

var _patternReg = require('./patternReg');

var _patternReg2 = _interopRequireDefault(_patternReg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clipRules = {
    evenodd: 0,
    nonzero: 1
};