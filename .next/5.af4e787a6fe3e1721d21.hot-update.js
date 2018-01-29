webpackHotUpdate(5,{

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(412);

var _inputRender = __webpack_require__(807);

var _inputRender2 = _interopRequireDefault(_inputRender);

var _validate = __webpack_require__(444);

var _validate2 = _interopRequireDefault(_validate);

var _reactAnimations = __webpack_require__(407);

var _radium = __webpack_require__(408);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Projects\\StarOfService-react.js\\components\\FirstPage.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Projects\\StarOfService-react.js\\components\\FirstPage.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hZjRlNzg3YTZmZTNlMTcyMWQyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaXJzdFBhZ2UuanM/NTA2OTI0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0ZpZWxkLCByZWR1eEZvcm19IGZyb20gJ3JlZHV4LWZvcm0nXHJcbmltcG9ydCBpbnB1dFJlbmRlciBmcm9tICcuL2lucHV0UmVuZGVyJ1xyXG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZSdcclxuaW1wb3J0IHtmYWRlSW59IGZyb20gJ3JlYWN0LWFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgUmFkaXVtLCB7U3R5bGVSb290fSBmcm9tICdyYWRpdW0nO1xyXG5cclxuLy8gY29uc3Qgc3R5bGVzID0ge1xyXG4vLyAgIHNsaWRlSW5SaWdodDoge1xyXG4vLyAgICAgYW5pbWF0aW9uOiAneCAxcycsXHJcbi8vICAgICBhbmltYXRpb25OYW1lOiBSYWRpdW0ua2V5ZnJhbWVzKGZhZGVJbiwgJ2ZhZGVJbicpXHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuY2xhc3MgRmlyc3RQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7aGFuZGxlU3VibWl0fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybVwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRDb250YWluZXJcIiA+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgY29tcG9uZW50PXtpbnB1dFJlbmRlcn1cclxuICAgICAgICAgICAgbGFiZWw9XCJFTUFJTFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgY29tcG9uZW50PXtpbnB1dFJlbmRlcn1cclxuICAgICAgICAgICAgbGFiZWw9XCJQQVNTV09SRFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17aW5wdXRSZW5kZXJ9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiQ09ORklSTSBQQVNTV09SRFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJuZXh0IGJ1dHRvblwiPlxyXG4gICAgICAgICAgICBOZXh0ICYjeDIxOTI7XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcclxuICBmb3JtOiAnd2l6YXJkJyxcclxuICBkZXN0cm95T25Vbm1vdW50OiBmYWxzZSxcclxuICBmb3JjZVVucmVnaXN0ZXJPblVubW91bnQ6IHRydWUsXHJcbiAgdmFsaWRhdGVcclxufSkoRmlyc3RQYWdlKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRmlyc3RQYWdlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBTEE7QUFPQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBUUE7QUFSQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFKQTtBQUNBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=