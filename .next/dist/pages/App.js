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

var _logo = require('./logo.svg');

var _logo2 = _interopRequireDefault(_logo);

require('./App.css');

var _Form = require('./components/Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\pages\\App.js';


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
          lineNumber: 19
        }
      }, _react2.default.createElement(_Form2.default, { onSubmit: showResults, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }));
    }
  }]);

  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  // const { data } = state;
  // console.log(data)
  if (state.form.wizard) {
    return {
      values: state.form.wizard.values
    };
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     showResults: () => {
//       dispatch(showResults())
//     }
//   }
// }


exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

// export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxBcHAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0IiwibG9nbyIsIkZvcm0iLCJzaG93UmVzdWx0cyIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJhbGVydCIsInZhbHVlcyIsInJlc29sdmUiLCJBcHAiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImZvcm0iLCJ3aXphcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUTs7QUFDUixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7QUFDUCxBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLGNBQWMsU0FBZCxBQUFjLG9CQUFBOytCQUNOLG1CQUFXLEFBQ3JCO2VBQVcsWUFBTSxBQUNmO2FBQUEsQUFBTyw2QkFBMkIseUJBQUEsQUFBZSxRQUFmLEFBQXVCLE1BQXpELEFBQWtDLEFBQTZCLEFBQy9EO0FBQ0Q7QUFIRCxPQUFBLEFBR0csQUFDSjtBQU5pQixBQUNsQixHQUFBO0FBREY7O0lBUU0sQTs7Ozs7Ozs7Ozs7NkJBQ0ssQUFDUDtjQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLGdDQUFLLFVBQU4sQUFBZ0I7b0JBQWhCO3NCQUZKLEFBQ0UsQUFDRSxBQUdMO0FBSEs7Ozs7OztBLEFBTFU7O0FBV2xCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFTLEFBQy9CO0FBQ0E7QUFDQTtNQUFJLE1BQUEsQUFBTSxLQUFWLEFBQWUsUUFBUSxBQUNyQjs7Y0FDVSxNQUFBLEFBQU0sS0FBTixBQUFXLE9BRHJCLEFBQU8sQUFDcUIsQUFFN0I7QUFIUSxBQUNMO0FBSUw7QUFURDs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBQUdBOzs7a0JBQWUseUJBQUEsQUFBUSxpQkFBdkIsQUFBZSxBQUF5Qjs7QUFFeEMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL1N0YXJPZlNlcnZpY2UtcmVhY3QuanMifQ==