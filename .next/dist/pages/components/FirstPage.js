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

var _inputRender = require('./inputRender');

var _inputRender2 = _interopRequireDefault(_inputRender);

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\pages\\components\\FirstPage.js';


var FirstPage = function (_Component) {
  (0, _inherits3.default)(FirstPage, _Component);

  function FirstPage() {
    (0, _classCallCheck3.default)(this, FirstPage);

    return (0, _possibleConstructorReturn3.default)(this, (FirstPage.__proto__ || (0, _getPrototypeOf2.default)(FirstPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(FirstPage, [{
    key: 'render',
    value: function render() {
      var handleSubmit = this.props.handleSubmit;

      return _react2.default.createElement('form', { onSubmit: handleSubmit, className: 'form', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('div', { className: 'inputContainer', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_reduxForm.Field, {
        name: 'email',
        type: 'email',
        component: _inputRender2.default,
        label: 'EMAIL',
        className: 'input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement(_reduxForm.Field, {
        name: 'password',
        type: 'password',
        component: _inputRender2.default,
        label: 'PASSWORD',
        className: 'input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement(_reduxForm.Field, {
        name: 'confirmPassword',
        type: 'password',
        component: _inputRender2.default,
        label: 'CONFIRM PASSWORD',
        className: 'input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), _react2.default.createElement('div', { className: 'nextContainer', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('button', { type: 'submit', className: 'next button', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Next \u2192')));
    }
  }]);

  return FirstPage;
}(_react.Component);

exports.default = (0, _reduxForm.reduxForm)({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: _validate2.default
})(FirstPage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxGaXJzdFBhZ2UuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGaWVsZCIsInJlZHV4Rm9ybSIsImlucHV0UmVuZGVyIiwidmFsaWRhdGUiLCJGaXJzdFBhZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcm9wcyIsImZvcm0iLCJkZXN0cm95T25Vbm1vdW50IiwiZm9yY2VVbnJlZ2lzdGVyT25Vbm1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTzs7QUFDZixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7NkJBQ0s7VUFBQSxBQUNBLGVBQWdCLEtBRGhCLEFBQ3FCLE1BRHJCLEFBQ0EsQUFFUDs7NkJBQ0UsY0FBQSxVQUFNLFVBQU4sQUFBZ0IsY0FBYyxXQUE5QixBQUF3QztvQkFBeEM7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztjQUFELEFBQ08sQUFDTDtjQUZGLEFBRU8sQUFDTDtBQUhGLEFBR2EsQUFDWDtlQUpGLEFBSVEsQUFDTjttQkFMRixBQUtZOztvQkFMWjtzQkFERixBQUNFLEFBT0E7QUFQQTtBQUNFLDBCQU1GLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7Y0FGRixBQUVPLEFBQ0w7QUFIRixBQUdhLEFBQ1g7ZUFKRixBQUlRLEFBQ047bUJBTEYsQUFLWTs7b0JBTFo7c0JBUkYsQUFRRSxBQU9BO0FBUEE7QUFDRSwwQkFNRixBQUFDO2NBQUQsQUFDTyxBQUNMO2NBRkYsQUFFTyxBQUNMO0FBSEYsQUFHYSxBQUNYO2VBSkYsQUFJUSxBQUNOO21CQUxGLEFBS1k7O29CQUxaO3NCQWhCSixBQUNFLEFBZUUsQUFRRjtBQVJFO0FBQ0UsMkJBT0osY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLFdBQXRCLEFBQWdDO29CQUFoQztzQkFBQTtBQUFBO1NBMUJOLEFBQ0UsQUF3QkUsQUFDRSxBQU1QOzs7OztBQXBDcUIsQSxBQXVDeEI7OztRQUF5QixBQUNqQixBQUNOO29CQUZ1QixBQUVMLEFBQ2xCOzRCQUh1QixBQUdHLEFBQzFCO0FBSmEsQUFBVTtBQUFBLEFBQ3ZCLENBRGEsRUFBZixBQUFlLEFBS1oiLCJmaWxlIjoiRmlyc3RQYWdlLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL1N0YXJPZlNlcnZpY2UtcmVhY3QuanMifQ==