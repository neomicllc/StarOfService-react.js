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

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\components\\App.js';


var showResults = function showResults(values) {
  return new _promise2.default(function (resolve) {
    setTimeout(function () {
      window.alert('You submitted:\n\n' + (0, _stringify2.default)(values, null, 2));
      resolve();
    }, 1000);
  });
};

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      console.log(this.props.values);
      return _react2.default.createElement('div', { className: 'App', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'My styled page'), _react2.default.createElement('link', { href: '../static/App.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react2.default.createElement(_Form2.default, { onSubmit: showResults, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }));
    }
  }]);

  return App;
}(_react.Component);

// const mapStateToProps = state => {
//   // const { data } = state;
//   // console.log(data)
//   if (state.form.wizard) {
//     return {
//       values: state.form.wizard.values
//     }
//   }
//
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     showResults: () => {
//       dispatch(showResults())
//     }
//   }
// }


// export default connect(mapStateToProps)(App);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFwcC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJIZWFkIiwiRm9ybSIsInNob3dSZXN1bHRzIiwic2V0VGltZW91dCIsIndpbmRvdyIsImFsZXJ0IiwidmFsdWVzIiwicmVzb2x2ZSIsIkFwcCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFROztBQUNSLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLGNBQWMsU0FBZCxBQUFjLG9CQUFBOytCQUNOLG1CQUFXLEFBQ3JCO2VBQVcsWUFBTSxBQUNmO2FBQUEsQUFBTyw2QkFBMkIseUJBQUEsQUFBZSxRQUFmLEFBQXVCLE1BQXpELEFBQWtDLEFBQTZCLEFBQy9EO0FBQ0Q7QUFIRCxPQUFBLEFBR0csQUFDSjtBQU5pQixBQUNsQixHQUFBO0FBREY7O0ksQUFRTTs7Ozs7Ozs7Ozs7NkJBQ0ssQUFDUDtjQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMkRBQU0sTUFBTixBQUFXLHFCQUFvQixLQUEvQixBQUFtQztvQkFBbkM7c0JBRkYsQUFFRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLGtEQUFpRCxLQUE1RCxBQUFnRTtvQkFBaEU7c0JBSkosQUFDRSxBQUdFLEFBRUY7QUFGRTsyQkFFRixBQUFDLGdDQUFLLFVBQU4sQUFBZ0I7b0JBQWhCO3NCQVBKLEFBQ0UsQUFNRSxBQUdMO0FBSEs7Ozs7OztBQVZVLEE7O0FBZ0JsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQUFFQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvU3Rhck9mU2VydmljZS1yZWFjdC5qcyJ9