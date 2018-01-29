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

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _Fonts = require('../components/Fonts');

var _Fonts2 = _interopRequireDefault(_Fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\pages\\index.js?entry';


var reducer = (0, _redux.combineReducers)({
  form: _reduxForm.reducer
});

var store = (0, _redux.createStore)(reducer);

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _Fonts2.default)();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRedux.Provider, { store: store, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_App2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsIlByb3ZpZGVyIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1Y2VyIiwicmVkdXhGb3JtUmVkdWNlciIsIlByb3BUeXBlcyIsIkFwcCIsIkZvbnRzIiwiZm9ybSIsInN0b3JlIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBYTs7QUFDdEIsQUFBUyxBQUFXOztBQUNwQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVzs7Ozs7Ozs7O0FBRWxCLElBQU07QUFBTixBQUFnQixBQUFnQixBQUN4QjtBQUR3QixBQUM5QixDQURjOztBQUloQixJQUFNLFFBQVEsd0JBQWQsQUFBYyxBQUFZOztJLEFBRXBCOzs7Ozs7Ozs7Ozt3Q0FDZ0IsQUFDbEI7QUFDRDs7Ozs2QkFFUSxBQUNQOzZCQUNFLEFBQUMsc0NBQVMsT0FBVixBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISztBQUFBOzs7OztBQVJZLEEsQUFjcEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvU3Rhck9mU2VydmljZS1yZWFjdC5qcyJ9