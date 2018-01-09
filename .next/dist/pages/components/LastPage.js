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

var _check = require('../check.png');

var _check2 = _interopRequireDefault(_check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\pages\\components\\LastPage.js';


var LastPage = function (_Component) {
  (0, _inherits3.default)(LastPage, _Component);

  function LastPage() {
    (0, _classCallCheck3.default)(this, LastPage);

    return (0, _possibleConstructorReturn3.default)(this, (LastPage.__proto__ || (0, _getPrototypeOf2.default)(LastPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(LastPage, [{
    key: 'render',
    value: function render() {
      var onSubmit = this.props.onSubmit;

      return _react2.default.createElement('div', { className: 'lastPageContainer', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('img', { className: 'success', alt: 'success', src: _check2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement('button', { onClick: onSubmit, className: 'last button', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Go to Dashboard \u2192'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxMYXN0UGFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInJlZHV4Rm9ybSIsInZhbGlkYXRlIiwiY2hlY2tDaXJjbGVHcmVlbiIsIkxhc3RQYWdlIiwib25TdWJtaXQiLCJwcm9wcyIsImZvcm0iLCJkZXN0cm95T25Vbm1vdW50IiwiZm9yY2VVbnJlZ2lzdGVyT25Vbm1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVE7O0FBQ1IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBc0I7Ozs7Ozs7OztJQUV2QixBOzs7Ozs7Ozs7Ozs2QkFDSztVQUFBLEFBQ0EsV0FBWSxLQURaLEFBQ2lCLE1BRGpCLEFBQ0EsQUFFUDs7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7T0FBQSx5Q0FDTyxXQUFMLEFBQWUsV0FBVSxLQUF6QixBQUE2QixXQUE3QixBQUF1QyxBQUFLO29CQUE1QztzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFlBQVEsU0FBUixBQUFpQixVQUFVLFdBQTNCLEFBQXFDO29CQUFyQztzQkFBQTtBQUFBO1NBSEosQUFDRSxBQUVFLEFBR0w7Ozs7O0EsQUFWb0IsQUFhdkI7OztRQUF5QixBQUNqQixBQUNOO29CQUZ1QixBQUVMLEFBQ2xCOzRCQUh1QixBQUdHLEFBQzFCO0FBSmEsQUFBVTtBQUFBLEFBQ3ZCLENBRGEsRUFBZixBQUFlLEFBS1oiLCJmaWxlIjoiTGFzdFBhZ2UuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvU3Rhck9mU2VydmljZS1yZWFjdC5qcyJ9