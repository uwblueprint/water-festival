

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var processColor = require('processColor');

var _require = require('NativeModules'),
    DevLoadingView = _require.DevLoadingView;

var HMRLoadingView = function () {
  function HMRLoadingView() {
    _classCallCheck(this, HMRLoadingView);
  }

  _createClass(HMRLoadingView, null, [{
    key: 'showMessage',
    value: function showMessage(message) {
      DevLoadingView.showMessage(message, processColor('#000000'), processColor('#aaaaaa'));
    }
  }, {
    key: 'hide',
    value: function hide() {
      DevLoadingView.hide();
    }
  }]);

  return HMRLoadingView;
}();

module.exports = HMRLoadingView;