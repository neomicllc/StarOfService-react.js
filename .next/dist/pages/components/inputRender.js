"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\Projects\\StarOfService-react.js\\pages\\components\\inputRender.js";


var inputRender = function (_Component) {
  (0, _inherits3.default)(inputRender, _Component);

  function inputRender() {
    (0, _classCallCheck3.default)(this, inputRender);

    return (0, _possibleConstructorReturn3.default)(this, (inputRender.__proto__ || (0, _getPrototypeOf2.default)(inputRender)).apply(this, arguments));
  }

  (0, _createClass3.default)(inputRender, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          input = _props.input,
          placeholder = _props.placeholder,
          className = _props.className,
          label = _props.label,
          type = _props.type,
          _props$meta = _props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error;

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, touched && error ? _react2.default.createElement("span", { className: "error", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, error) : label), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement("input", (0, _extends3.default)({}, input, { className: className, placeholder: placeholder, type: type, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }))));
    }
  }]);

  return inputRender;
}(_react.Component);

exports.default = inputRender;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxpbnB1dFJlbmRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImlucHV0UmVuZGVyIiwicHJvcHMiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJ0eXBlIiwibWV0YSIsInRvdWNoZWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7Ozs7Ozs7SUFFVCxBOzs7Ozs7Ozs7Ozs2QkFDSzttQkFDd0UsS0FEeEUsQUFDNkU7VUFEN0UsQUFDQSxlQURBLEFBQ0E7VUFEQSxBQUNPLHFCQURQLEFBQ087VUFEUCxBQUNvQixtQkFEcEIsQUFDb0I7VUFEcEIsQUFDK0IsZUFEL0IsQUFDK0I7VUFEL0IsQUFDc0MsY0FEdEMsQUFDc0M7K0JBRHRDLEFBQzRDO1VBRDVDLEFBQ29ELHNCQURwRCxBQUNvRDtVQURwRCxBQUM2RCxvQkFEN0QsQUFDNkQsQUFFcEU7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBUTtBQUFSO0FBQUEsb0JBQVEsQUFBVyx3QkFBUSxjQUFBLFVBQU0sV0FBTixBQUFnQjtvQkFBaEI7c0JBQUEsQUFBeUI7QUFBekI7T0FBQSxFQUFuQixBQUFtQixTQUQ3QixBQUNFLEFBQW9FLEFBQ3BFLHdCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLDJFQUNFLEFBQVcsU0FBTyxXQUFsQixBQUE2QixXQUFXLGFBQXhDLEFBQXFELGFBQWEsTUFBbEUsQUFBd0U7b0JBQXhFO3NCQUpOLEFBQ0UsQUFFRSxBQUNFLEFBS1A7QUFMTzs7Ozs7O0FBUmdCLEEsQUFnQjFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImlucHV0UmVuZGVyLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL1N0YXJPZlNlcnZpY2UtcmVhY3QuanMifQ==