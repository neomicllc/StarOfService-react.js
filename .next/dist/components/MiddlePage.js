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

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _reactAnimations = require('react-animations');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\components\\MiddlePage.js';


var styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: _radium2.default.keyframes(_reactAnimations.fadeIn, 'fadeIn')
  }
};

var choices = ['internet', 'press', 'tv', 'friends'];

var renderError = function renderError(_ref) {
  var label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;

  return touched && error ? _react2.default.createElement('span', { className: 'error', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, error) : _react2.default.createElement('label', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
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
      lineNumber: 22
    }
  }, touched && error ? _react2.default.createElement('span', { className: 'error', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, error) : _react2.default.createElement('label', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, label), _react2.default.createElement('select', (0, _extends3.default)({}, input, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement('option', { value: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), choices.map(function (val) {
    return _react2.default.createElement('option', { value: val, key: val, __source: {
        fileName: _jsxFileName,
        lineNumber: 27
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

      return _react2.default.createElement(_radium.StyleRoot, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('form', { onSubmit: handleSubmit, className: 'form', autoComplete: 'off', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'My styled page'), _react2.default.createElement('link', { href: '../static/progressBar.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement('link', { href: '../static/flexbox.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), _react2.default.createElement('div', { className: 'middlePage', style: styles.fadeIn, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_reduxForm.Field, { name: 'dateOfBirth', label: 'DATE OF BIRTH', component: renderError, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_reduxForm.Field, {
        name: 'DD',
        type: 'text',
        component: 'input',
        value: 'DD',
        placeholder: 'DD',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_reduxForm.Field, {
        name: 'MM',
        type: 'text',
        component: 'input',
        value: 'MM',
        placeholder: 'MM',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_reduxForm.Field, {
        name: 'YYYY',
        type: 'text',
        component: 'input',
        value: 'YYYY',
        placeholder: 'YYYY',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_reduxForm.Field, { name: 'gender', label: 'GENDER', component: renderError, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement('div', { className: 'gender-section', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_reduxForm.Field, {
        name: 'gender',
        type: 'radio',
        component: 'input',
        value: 'MALE',
        id: 'tab-one',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react2.default.createElement('label', { htmlFor: 'tab-one', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'Male'), _react2.default.createElement(_reduxForm.Field, {
        name: 'gender',
        type: 'radio',
        component: 'input',
        value: 'FEMALE',
        id: 'tab-two',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement('label', { htmlFor: 'tab-two', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Female'), _react2.default.createElement(_reduxForm.Field, {
        name: 'gender',
        type: 'radio',
        component: 'input',
        value: 'UNSPECIFIED',
        id: 'tab-three',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement('label', { htmlFor: 'tab-three', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'Unspecified'))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_reduxForm.Field, { name: 'select', label: 'WHERE DID YOU HEAR ABOUT US?', component: renderSelector, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }))), _react2.default.createElement('div', { className: 'buttonContainer', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('button', { type: 'button', className: 'back button', onClick: previousPage, __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, 'Back'), _react2.default.createElement('button', { type: 'submit', className: 'next button', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, 'Next \u2192'))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE1pZGRsZVBhZ2UuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGaWVsZCIsInJlZHV4Rm9ybSIsInZhbGlkYXRlIiwiSGVhZCIsImZhZGVJbiIsIlJhZGl1bSIsIlN0eWxlUm9vdCIsInN0eWxlcyIsImFuaW1hdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJrZXlmcmFtZXMiLCJjaG9pY2VzIiwicmVuZGVyRXJyb3IiLCJsYWJlbCIsIm1ldGEiLCJ0b3VjaGVkIiwiZXJyb3IiLCJyZW5kZXJTZWxlY3RvciIsImlucHV0IiwibWFwIiwidmFsIiwiTWlkZGxlUGFnZSIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwicHJldmlvdXNQYWdlIiwiZm9ybSIsImRlc3Ryb3lPblVubW91bnQiLCJmb3JjZVVucmVnaXN0ZXJPblVubW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTzs7QUFDZixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTzs7OztBQUNQLEFBQVE7O0FBQ1IsQUFBTyxBQUFTOzs7Ozs7Ozs7QUFFaEIsSUFBTTs7ZUFDSSxBQUNLLEFBQ1g7bUJBQWUsaUJBQUEsQUFBTyxBQUFVLG1DQUhwQyxBQUFlLEFBQ0wsQUFFUyxBQUF5QjtBQUZsQyxBQUNOO0FBRlcsQUFDYjs7QUFNRixJQUFNLFVBQVUsQ0FBQSxBQUFDLFlBQUQsQUFBYSxTQUFiLEFBQXNCLE1BQXRDLEFBQWdCLEFBQTRCOztBQUU1QyxJQUFNLGNBQWMsU0FBZCxBQUFjLGtCQUFxQztNQUFuQyxBQUFtQyxhQUFuQyxBQUFtQzt1QkFBNUIsQUFBNEI7TUFBckIsQUFBcUIsb0JBQXJCLEFBQXFCO01BQVosQUFBWSxrQkFBWixBQUFZLEFBQ3ZEOztTQUFPLFdBQUEsQUFBVyx3QkFBUSxjQUFBLFVBQU0sV0FBTixBQUFnQjtnQkFBaEI7a0JBQUEsQUFBeUI7QUFBekI7R0FBQSxF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RSxBQUFDO2NBQUQsQUFDTyxBQUNMO2NBRkYsQUFFTyxBQUNMO21CQUhGLEFBR1ksQUFDVjtlQUpGLEFBSVEsQUFDTjtZQUxGLEFBS0s7O29CQUxMO3NCQURGLEFBQ0UsQUFPQTtBQVBBO0FBQ0UsMEJBTUYsY0FBQSxXQUFPLFNBQVAsQUFBZTtvQkFBZjtzQkFBQTtBQUFBO1NBUkYsQUFRRSxBQUNBLHlCQUFBLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7Y0FGRixBQUVPLEFBQ0w7bUJBSEYsQUFHWSxBQUNWO2VBSkYsQUFJUSxBQUNOO1lBTEYsQUFLSzs7b0JBTEw7c0JBVEYsQUFTRSxBQU9BO0FBUEE7QUFDRSwwQkFNRixjQUFBLFdBQU8sU0FBUCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0FoQkYsQUFnQkUsQUFDQSwyQkFBQSxBQUFDO2NBQUQsQUFDTyxBQUNMO2NBRkYsQUFFTyxBQUNMO21CQUhGLEFBR1ksQUFDVjtlQUpGLEFBSVEsQUFDTjtZQUxGLEFBS0s7O29CQUxMO3NCQWpCRixBQWlCRSxBQU9BO0FBUEE7QUFDRSwwQkFNRixjQUFBLFdBQU8sU0FBUCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7U0FuRE4sQUF5QkUsQUFFRSxBQXdCRSxBQUdKLGtDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsa0NBQU0sTUFBUCxBQUFZLFVBQVMsT0FBckIsQUFBMkIsZ0NBQStCLFdBQTFELEFBQXFFO29CQUFyRTtzQkE3RE4sQUFNRSxBQXNERSxBQUNFLEFBR0o7QUFISTs0QkFHSixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0MsZUFBYyxTQUE5QyxBQUF1RDtvQkFBdkQ7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFHQSx5QkFBQSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0M7b0JBQWhDO3NCQUFBO0FBQUE7U0F0RVIsQUFDRSxBQUNFLEFBZ0VFLEFBSUUsQUFPVDs7Ozs7QSxBQWpGc0IsQUFvRnpCOzs7UUFBeUIsQUFDakIsQUFDTjtvQkFGdUIsQUFFTCxBQUNsQjs0QkFIdUIsQUFHRyxBQUMxQjtBQUphLEFBQVU7QUFBQSxBQUN2QixDQURhLEVBQWYsQUFBZSxBQUtaIiwiZmlsZSI6Ik1pZGRsZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvU3Rhck9mU2VydmljZS1yZWFjdC5qcyJ9