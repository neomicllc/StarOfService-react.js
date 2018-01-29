'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

var _reactAnimations = require('react-animations');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\components\\LastPage.js';


var styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: _radium2.default.keyframes(_reactAnimations.fadeIn, 'fadeIn')
  },
  zoomIn: {
    animation: 'x 1s',
    animationName: _radium2.default.keyframes(_reactAnimations.zoomIn, 'zoomIn')
  }
};

var LastPage = function (_Component) {
  (0, _inherits3.default)(LastPage, _Component);

  function LastPage() {
    (0, _classCallCheck3.default)(this, LastPage);

    return (0, _possibleConstructorReturn3.default)(this, (LastPage.__proto__ || (0, _getPrototypeOf2.default)(LastPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(LastPage, [{
    key: 'render',
    value: function render() {
      var handleSubmit = this.props.handleSubmit;

      return _react2.default.createElement(_radium.StyleRoot, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('form', { onSubmit: handleSubmit, autoComplete: 'off', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('div', { className: 'lastPageContainer', style: styles.fadeIn, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('img', { className: 'success', alt: 'success', src: '../static/check.png', style: styles.zoomIn, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('button', { type: 'submit', className: 'last button', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Go to Dashboard \u2192'))));
    }
  }]);

  return LastPage;
}(_react.Component);

exports.default = (0, _reduxForm.reduxForm)({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: _validate2.default
})(LastPage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExhc3RQYWdlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwicmVkdXhGb3JtIiwidmFsaWRhdGUiLCJmYWRlSW4iLCJ6b29tSW4iLCJSYWRpdW0iLCJTdHlsZVJvb3QiLCJzdHlsZXMiLCJhbmltYXRpb24iLCJhbmltYXRpb25OYW1lIiwia2V5ZnJhbWVzIiwiTGFzdFBhZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcm9wcyIsImZvcm0iLCJkZXN0cm95T25Vbm1vdW50IiwiZm9yY2VVbnJlZ2lzdGVyT25Vbm1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVE7O0FBQ1IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVEsQUFBUTs7QUFDaEIsQUFBTyxBQUFTOzs7Ozs7Ozs7QUFFaEIsSUFBTTs7ZUFDSSxBQUNLLEFBQ1g7bUJBQWUsaUJBQUEsQUFBTyxBQUFVLG1DQUhyQixBQUNMLEFBRVMsQUFBeUIsQUFFMUM7QUFKUSxBQUNOOztlQUdNLEFBQ0ssQUFDWDttQkFBZSxpQkFBQSxBQUFPLEFBQVUsbUNBUHBDLEFBQWUsQUFLTCxBQUVTLEFBQXlCO0FBRmxDLEFBQ047QUFOVyxBQUNiOztJQVVJLEE7Ozs7Ozs7Ozs7OzZCQUNLO1VBQUEsQUFDQSxlQUFnQixLQURoQixBQUNxQixNQURyQixBQUNBLEFBRVA7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsY0FBQSxVQUFNLFVBQU4sQUFBZ0IsY0FBYyxjQUE5QixBQUEyQztvQkFBM0M7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUscUJBQW9CLE9BQU8sT0FBMUMsQUFBaUQ7b0JBQWpEO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxXQUFMLEFBQWUsV0FBVSxLQUF6QixBQUE2QixXQUFVLEtBQXZDLEFBQTJDLHVCQUFzQixPQUFPLE9BQXhFLEFBQStFO29CQUEvRTtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0M7b0JBQWhDO3NCQUFBO0FBQUE7U0FMTixBQUNFLEFBQ0EsQUFDRSxBQUVFLEFBS1A7Ozs7O0EsQUFkb0IsQUFpQnZCOzs7UUFBeUIsQUFDakIsQUFDTjtvQkFGdUIsQUFFTCxBQUNsQjs0QkFIdUIsQUFHRyxBQUMxQjtBQUphLEFBQVU7QUFBQSxBQUN2QixDQURhLEVBQWYsQUFBZSxBQUtaIiwiZmlsZSI6Ikxhc3RQYWdlLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL1N0YXJPZlNlcnZpY2UtcmVhY3QuanMifQ==