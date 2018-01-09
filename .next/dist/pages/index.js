'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\pages\\index.js?entry';


var reducer = (0, _redux.combineReducers)({
  form: _reduxForm.reducer
});

// const showResults = values =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(values)
//       //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
//       resolve()
//     }, 1000)
//   });

var store = (window.devToolsExtension ? window.devToolsExtension()(_redux.createStore) : _redux.createStore)(reducer);

(0, _reactDom.render)(_react2.default.createElement(_reactRedux.Provider, { store: store, __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  }
}, _react2.default.createElement(_App2.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  }
})), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInJlbmRlciIsIlByb3ZpZGVyIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1Y2VyIiwicmVkdXhGb3JtUmVkdWNlciIsIkFwcCIsImZvcm0iLCJzdG9yZSIsIndpbmRvdyIsImRldlRvb2xzRXh0ZW5zaW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBYTs7QUFDdEIsQUFBUyxBQUFXOztBQUNwQixBQUFPLEFBQVM7Ozs7Ozs7OztBQUVoQixJQUFNO0FBQU4sQUFBZ0IsQUFBZ0IsQUFDeEI7QUFEd0IsQUFDOUIsQ0FEYzs7QUFJaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNLFFBQVEsQ0FBQyxPQUFBLEFBQU8sb0JBQ2xCLE9BRFUsQUFBQyxBQUNYLEFBQU8sQUFBb0IsQUFDM0IsOERBRkosQUFBYyxBQUVHOztBQUVqQixzQ0FDRSxBQUFDLHNDQUFTLE9BQVYsQUFBaUI7Y0FBakI7Z0JBQUEsQUFDRTtBQURGO0NBQUEsa0JBQ0UsQUFBQzs7Y0FBRDtnQkFGSixBQUNFLEFBQ0U7QUFBQTtBQUFBLEtBRUYsU0FBQSxBQUFTLGVBSlgsQUFJRSxBQUF3QiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Qcm9qZWN0cy9TdGFyT2ZTZXJ2aWNlLXJlYWN0LmpzIn0=