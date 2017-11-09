Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Touchable = require('react-native/Libraries/Components/Touchable/Touchable');

var _Touchable2 = _interopRequireDefault(_Touchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

exports.default = _extends({}, _Touchable2.default.Mixin, {

    touchableHandleStartShouldSetResponder: function touchableHandleStartShouldSetResponder(e) {

        if (this.props.onStartShouldSetResponder) {
            return this.props.onStartShouldSetResponder(e);
        } else {
            return _Touchable2.default.Mixin.touchableHandleStartShouldSetResponder.call(this, e);
        }
    },

    touchableHandleResponderTerminationRequest: function touchableHandleResponderTerminationRequest(e) {
        if (this.props.onResponderTerminationRequest) {
            return this.props.onResponderTerminationRequest(e);
        } else {
            return _Touchable2.default.Mixin.touchableHandleResponderTerminationRequest.call(this, e);
        }
    },

    touchableHandleResponderGrant: function touchableHandleResponderGrant(e) {
        if (this.props.onResponderGrant) {
            return this.props.onResponderGrant(e);
        } else {
            return _Touchable2.default.Mixin.touchableHandleResponderGrant.call(this, e);
        }
    },

    touchableHandleResponderMove: function touchableHandleResponderMove(e) {
        if (this.props.onResponderMove) {
            return this.props.onResponderMove(e);
        } else {
            return _Touchable2.default.Mixin.touchableHandleResponderMove.call(this, e);
        }
    },

    touchableHandleResponderRelease: function touchableHandleResponderRelease(e) {
        if (this.props.onResponderRelease) {
            return this.props.onResponderRelease(e);
        } else {
            return _Touchable2.default.Mixin.touchableHandleResponderRelease.call(this, e);
        }
    },

    touchableHandleResponderTerminate: function touchableHandleResponderTerminate(e) {
        if (this.props.onResponderTerminate) {
            return this.props.onResponderTerminate(e);
        } else {
            return _Touchable2.default.Mixin.touchableHandleResponderTerminate.call(this, e);
        }
    },

    touchableHandlePress: function touchableHandlePress(e) {
        this.props.onPress && this.props.onPress(e);
    },

    touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
        this.props.onPressIn && this.props.onPressIn(e);
    },

    touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
        this.props.onPressOut && this.props.onPressOut(e);
    },

    touchableHandleLongPress: function touchableHandleLongPress(e) {
        this.props.onLongPress && this.props.onLongPress(e);
    },

    touchableGetPressRectOffset: function touchableGetPressRectOffset() {
        return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
    },

    touchableGetHitSlop: function touchableGetHitSlop() {
        return this.props.hitSlop;
    },

    touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
        return this.props.delayPressIn || 0;
    },

    touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
        return this.props.delayLongPress === 0 ? 0 : this.props.delayLongPress || 500;
    },

    touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
        return this.props.delayPressOut || 0;
    }
});