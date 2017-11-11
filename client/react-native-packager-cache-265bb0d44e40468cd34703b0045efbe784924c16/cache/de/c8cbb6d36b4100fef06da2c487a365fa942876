Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SceneRendererPropType = exports.NavigationStatePropType = exports.NavigationRoutePropType = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationRoutePropType = exports.NavigationRoutePropType = _propTypes2.default.shape({
  title: _propTypes2.default.string,
  key: _propTypes2.default.string.isRequired
});

var NavigationStatePropType = exports.NavigationStatePropType = _propTypes2.default.shape({
  routes: _propTypes2.default.arrayOf(NavigationRoutePropType).isRequired,
  index: _propTypes2.default.number.isRequired
});

var SceneRendererPropType = exports.SceneRendererPropType = {
  layout: _propTypes2.default.shape({
    measured: _propTypes2.default.bool.isRequired,
    height: _propTypes2.default.number.isRequired,
    width: _propTypes2.default.number.isRequired
  }).isRequired,
  navigationState: NavigationStatePropType.isRequired,
  position: _propTypes2.default.instanceOf(_reactNative.Animated.Value).isRequired,
  jumpToIndex: _propTypes2.default.func.isRequired,
  getLastPosition: _propTypes2.default.func.isRequired,
  subscribe: _propTypes2.default.func.isRequired
};