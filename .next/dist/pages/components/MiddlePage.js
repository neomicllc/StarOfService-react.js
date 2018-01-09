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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _inputRender = require('./inputRender');

var _inputRender2 = _interopRequireDefault(_inputRender);

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

require('../styles/flexbox.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\pages\\components\\MiddlePage.js';


var choices = ['internet', 'press', 'tv', 'friends'];

var renderError = function renderError(_ref) {
  var label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;

  return touched && error ? _react2.default.createElement('span', { className: 'error', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, error) : _react2.default.createElement('label', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, label);
};

var renderSelector = function renderSelector(_ref2) {
  var label = _ref2.label,
      input = _ref2.input,
      _ref2$meta = _ref2.meta,
      touched = _ref2$meta.touched,
      error = _ref2$meta.error;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, touched && error ? _react2.default.createElement('span', { className: 'error', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, error) : _react2.default.createElement('label', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, label), _react2.default.createElement('select', (0, _extends3.default)({}, input, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('option', { value: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), choices.map(function (val) {
    return _react2.default.createElement('option', { value: val, key: val, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, val);
  })));
};

var MiddlePage = function (_Component) {
  (0, _inherits3.default)(MiddlePage, _Component);

  function MiddlePage() {
    (0, _classCallCheck3.default)(this, MiddlePage);

    return (0, _possibleConstructorReturn3.default)(this, (MiddlePage.__proto__ || (0, _getPrototypeOf2.default)(MiddlePage)).apply(this, arguments));
  }

  (0, _createClass3.default)(MiddlePage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          previousPage = _props.previousPage;

      return _react2.default.createElement('form', { onSubmit: handleSubmit, className: 'form', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('div', { className: 'middlePage', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_reduxForm.Field, { name: 'dateOfBirth', label: 'DATE OF BIRTH', component: renderError, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement(_reduxForm.Field, {
        name: 'DD',
        type: 'text',
        component: 'input',
        value: 'DD',
        placeholder: 'DD',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_reduxForm.Field, {
        name: 'MM',
        type: 'text',
        component: 'input',
        value: 'MM',
        placeholder: 'MM',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement(_reduxForm.Field, {
        name: 'YYYY',
        type: 'text',
        component: 'input',
        value: 'YYYY',
        placeholder: 'YYYY',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_reduxForm.Field, { name: 'gender', label: 'GENDER', component: renderError, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement('div', { className: 'gender-section', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_reduxForm.Field, {
        name: 'gender',
        type: 'radio',
        component: 'input',
        value: 'MALE',
        id: 'tab-one',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement('label', { htmlFor: 'tab-one', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Male'), _react2.default.createElement(_reduxForm.Field, {
        name: 'gender',
        type: 'radio',
        component: 'input',
        value: 'FEMALE',
        id: 'tab-two',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement('label', { htmlFor: 'tab-two', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Female'), _react2.default.createElement(_reduxForm.Field, {
        name: 'gender',
        type: 'radio',
        component: 'input',
        value: 'UNSPECIFIED',
        id: 'tab-three',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement('label', { htmlFor: 'tab-three', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Unspecified'))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_reduxForm.Field, { name: 'select', label: 'WHERE DID YOU HEAR ABOUT US?', component: renderSelector, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }))), _react2.default.createElement('div', { className: 'buttonContainer', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('button', { type: 'button', className: 'back button', onClick: previousPage, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Back'), _react2.default.createElement('button', { type: 'submit', className: 'next button', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'Next \u2192')));
    }
  }]);

  return MiddlePage;
}(_react.Component);

exports.default = (0, _reduxForm.reduxForm)({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: _validate2.default
})(MiddlePage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxNaWRkbGVQYWdlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRmllbGQiLCJyZWR1eEZvcm0iLCJpbnB1dFJlbmRlciIsInZhbGlkYXRlIiwiY2hvaWNlcyIsInJlbmRlckVycm9yIiwibGFiZWwiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIiwicmVuZGVyU2VsZWN0b3IiLCJpbnB1dCIsIm1hcCIsInZhbCIsIk1pZGRsZVBhZ2UiLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsInByZXZpb3VzUGFnZSIsImZvcm0iLCJkZXN0cm95T25Vbm1vdW50IiwiZm9yY2VVbnJlZ2lzdGVyT25Vbm1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQU87O0FBQ2YsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTzs7Ozs7OztBQUVQLElBQU0sVUFBVSxDQUFBLEFBQUMsWUFBRCxBQUFhLFNBQWIsQUFBc0IsTUFBdEMsQUFBZ0IsQUFBNEI7O0FBRTVDLElBQU0sY0FBYyxTQUFkLEFBQWMsa0JBQXFDO01BQW5DLEFBQW1DLGFBQW5DLEFBQW1DO3VCQUE1QixBQUE0QjtNQUFyQixBQUFxQixvQkFBckIsQUFBcUI7TUFBWixBQUFZLGtCQUFaLEFBQVksQUFFdkQ7O1NBQU8sV0FBQSxBQUFXLHdCQUFRLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQSxBQUF5QjtBQUF6QjtHQUFBLEVBQW5CLEFBQW1CLHlCQUF5QyxjQUFBOztnQkFBQTtrQkFBQSxBQUFRO0FBQVI7QUFBQSxHQUFBLEVBQW5FLEFBQW1FLEFBQ3BFO0FBSEQ7O0FBS0EsSUFBTSxpQkFBaUIsU0FBakIsQUFBaUIsc0JBQUE7TUFBQSxBQUFFLGNBQUYsQUFBRTtNQUFGLEFBQVMsY0FBVCxBQUFTO3lCQUFULEFBQWdCO01BQWhCLEFB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QUFPLFNBQVAsQUFBZTtvQkFBZjtzQkFBQTtBQUFBO1NBbkROLEFBeUJFLEFBRUUsQUF3QkUsQUFHSixrQ0FBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGtDQUFNLE1BQVAsQUFBWSxVQUFTLE9BQXJCLEFBQTJCLGdDQUErQixXQUExRCxBQUFxRTtvQkFBckU7c0JBeEROLEFBQ0UsQUFzREUsQUFDRSxBQUdKO0FBSEk7NEJBR0osY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLFdBQXRCLEFBQWdDLGVBQWMsU0FBOUMsQUFBdUQ7b0JBQXZEO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBR0EseUJBQUEsY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLFdBQXRCLEFBQWdDO29CQUFoQztzQkFBQTtBQUFBO1NBaEVOLEFBQ0UsQUEyREUsQUFJRSxBQU1QOzs7OztBQTFFc0IsQSxBQTZFekI7OztRQUF5QixBQUNqQixBQUNOO29CQUZ1QixBQUVMLEFBQ2xCOzRCQUh1QixBQUdHLEFBQzFCO0FBSmEsQUFBVTtBQUFBLEFBQ3ZCLENBRGEsRUFBZixBQUFlLEFBS1oiLCJmaWxlIjoiTWlkZGxlUGFnZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9TdGFyT2ZTZXJ2aWNlLXJlYWN0LmpzIn0=