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

var _reactAnimations = require('react-animations');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\components\\FirstPage.js';


// const styles = {
//   slideInRight: {
//     animation: 'x 1s',
//     animationName: Radium.keyframes(fadeIn, 'fadeIn')
//   }
// };

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

      return _react2.default.createElement('form', { onSubmit: handleSubmit, className: 'form', autoComplete: 'off', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('div', { className: 'inputContainer', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_reduxForm.Field, {
        name: 'email',
        type: 'email',
        component: _inputRender2.default,
        label: 'EMAIL',
        className: 'input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement(_reduxForm.Field, {
        name: 'password',
        type: 'password',
        component: _inputRender2.default,
        label: 'PASSWORD',
        className: 'input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_reduxForm.Field, {
        name: 'confirmPassword',
        type: 'password',
        component: _inputRender2.default,
        label: 'CONFIRM PASSWORD',
        className: 'input',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), _react2.default.createElement('div', { className: 'nextContainer', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('button', { type: 'submit', className: 'next button', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZpcnN0UGFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZpZWxkIiwicmVkdXhGb3JtIiwiaW5wdXRSZW5kZXIiLCJ2YWxpZGF0ZSIsImZhZGVJbiIsIlJhZGl1bSIsIlN0eWxlUm9vdCIsIkZpcnN0UGFnZSIsImhhbmRsZVN1Ym1pdCIsInByb3BzIiwiZm9ybSIsImRlc3Ryb3lPblVubW91bnQiLCJmb3JjZVVucmVnaXN0ZXJPblVubW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFPOztBQUNmLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVE7O0FBQ1IsQUFBTyxBQUFTOzs7Ozs7Ozs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNLEE7Ozs7Ozs7Ozs7OzZCQUNLO1VBQUEsQUFDQSxlQUFnQixLQURoQixBQUNxQixNQURyQixBQUNBLEFBRVA7OzZCQUNFLGNBQUEsVUFBTSxVQUFOLEFBQWdCLGNBQWMsV0FBOUIsQUFBd0MsUUFBTyxjQUEvQyxBQUE0RDtvQkFBNUQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztjQUFELEFBQ08sQUFDTDtjQUZGLEFBRU8sQUFDTDtBQUhGLEFBR2EsQUFDWDtlQUpGLEFBSVEsQUFDTjttQkFMRixBQUtZOztvQkFMWjtzQkFERixBQUNFLEFBT0E7QUFQQTtBQUNFLDBCQU1GLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7Y0FGRixBQUVPLEFBQ0w7QUFIRixBQUdhLEFBQ1g7ZUFKRixBQUlRLEFBQ047bUJBTEYsQUFLWTs7b0JBTFo7c0JBUkYsQUFRRSxBQU9BO0FBUEE7QUFDRSwwQkFNRixBQUFDO2NBQUQsQUFDTyxBQUNMO2NBRkYsQUFFTyxBQUNMO0FBSEYsQUFHYSxBQUNYO2VBSkYsQUFJUSxBQUNOO21CQUxGLEFBS1k7O29CQUxaO3NCQWhCSixBQUNFLEFBZUUsQUFRRjtBQVJFO0FBQ0UsMkJBT0osY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLFdBQXRCLEFBQWdDO29CQUFoQztzQkFBQTtBQUFBO1NBMUJOLEFBQ0UsQUF3QkUsQUFDRSxBQU1QOzs7OztBQXBDcUIsQSxBQXVDeEI7OztRQUF5QixBQUNqQixBQUNOO29CQUZ1QixBQUVMLEFBQ2xCOzRCQUh1QixBQUdHLEFBQzFCO0FBSmEsQUFBVTtBQUFBLEFBQ3ZCLENBRGEsRUFBZixBQUFlLEFBS1oiLCJmaWxlIjoiRmlyc3RQYWdlLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL1N0YXJPZlNlcnZpY2UtcmVhY3QuanMifQ==