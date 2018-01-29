'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactAnimations = require('react-animations');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\components\\inputRender.js';


var styles = {
  slideInRight: {
    animation: 'x 1s',
    animationName: _radium2.default.keyframes(_reactAnimations.fadeIn, 'fadeIn')
  }
};

var inputRender = function (_Component) {
  (0, _inherits3.default)(inputRender, _Component);

  function inputRender() {
    (0, _classCallCheck3.default)(this, inputRender);

    return (0, _possibleConstructorReturn3.default)(this, (inputRender.__proto__ || (0, _getPrototypeOf2.default)(inputRender)).apply(this, arguments));
  }

  (0, _createClass3.default)(inputRender, [{
    key: 'render',
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

      return _react2.default.createElement('div', { style: styles.slideInRight, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, touched && error ? _react2.default.createElement('span', { className: 'error', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, error) : label), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('input', (0, _extends3.default)({}, input, { className: className, placeholder: placeholder, type: type, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }))));
    }
  }]);

  return inputRender;
}(_react.Component);

exports.default = inputRender;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGlucHV0UmVuZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFkZUluIiwiUmFkaXVtIiwiU3R5bGVSb290Iiwic3R5bGVzIiwic2xpZGVJblJpZ2h0IiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uTmFtZSIsImtleWZyYW1lcyIsImlucHV0UmVuZGVyIiwicHJvcHMiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJ0eXBlIiwibWV0YSIsInRvdWNoZWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUTs7QUFDUixBQUFPLEFBQVM7Ozs7Ozs7OztBQUVoQixJQUFNOztlQUNVLEFBQ0QsQUFDWDttQkFBZSxpQkFBQSxBQUFPLEFBQVUsbUNBSHBDLEFBQWUsQUFDQyxBQUVHLEFBQXlCO0FBRjVCLEFBQ1o7QUFGVyxBQUNiOztJQU1JLEE7Ozs7Ozs7Ozs7OzZCQUNLO21CQUN3RSxLQUR4RSxBQUM2RTtVQUQ3RSxBQUNBLGVBREEsQUFDQTtVQURBLEFBQ08scUJBRFAsQUFDTztVQURQLEFBQ29CLG1CQURwQixBQUNvQjtVQURwQixBQUMrQixlQUQvQixBQUMrQjtVQUQvQixBQUNzQyxjQUR0QyxBQUNzQzsrQkFEdEMsQUFDNEM7VUFENUMsQUFDb0Qsc0JBRHBELEFBQ29EO1VBRHBELEFBQzZELG9CQUQ3RCxBQUM2RCxBQUVwRTs7NkJBQ0UsY0FBQSxTQUFLLE9BQU8sT0FBWixBQUFtQjtvQkFBbkI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBUTtBQUFSO0FBQUEsb0JBQVEsQUFBVyx3QkFBUSxjQUFBLFVBQU0sV0FBTixBQUFnQjtvQkFBaEI7c0JBQUEsQUFBeUI7QUFBekI7T0FBQSxFQUFuQixBQUFtQixTQUQ3QixBQUNFLEFBQW9FLEFBQ3BFLHdCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLDJFQUNFLEFBQVcsU0FBTyxXQUFsQixBQUE2QixXQUFXLGFBQXhDLEFBQXFELGFBQWEsTUFBbEUsQUFBd0U7b0JBQXhFO3NCQUpOLEFBQ0UsQUFFRSxBQUNFLEFBS1A7QUFMTzs7Ozs7O0FBUmdCLEEsQUFnQjFCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImlucHV0UmVuZGVyLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL1N0YXJPZlNlcnZpY2UtcmVhY3QuanMifQ==