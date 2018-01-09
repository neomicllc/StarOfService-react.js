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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FirstPage = require('./FirstPage');

var _FirstPage2 = _interopRequireDefault(_FirstPage);

var _MiddlePage = require('./MiddlePage');

var _MiddlePage2 = _interopRequireDefault(_MiddlePage);

var _LastPage = require('./LastPage');

var _LastPage2 = _interopRequireDefault(_LastPage);

require('../styles/progressBar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\pages\\components\\Form.js';


var Form = function (_Component) {
  (0, _inherits3.default)(Form, _Component);

  function Form(props) {
    (0, _classCallCheck3.default)(this, Form);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call(this, props));

    _this.state = {
      page: 1
    };

    _this.nextPage = _this.nextPage.bind(_this);
    _this.previousPage = _this.previousPage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Form, [{
    key: 'nextPage',
    value: function nextPage() {
      this.setState({
        page: this.state.page + 1
      });
    }
  }, {
    key: 'previousPage',
    value: function previousPage() {
      this.setState({
        page: this.state.page - 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var onSubmit = this.props.onSubmit;
      var page = this.state.page;

      return _react2.default.createElement('div', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, page === 3 ? 'Thank You!' : 'Signup'), _react2.default.createElement('ol', { className: 'FormStepList', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('li', { className: 'FormStepList-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('span', { className: page === 1 ? "FormStepIcon is-active && is-passed" : "FormStepIcon is-passed", __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('span', { className: 'FormStepIcon-circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }))), _react2.default.createElement('li', { className: 'FormStepList-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('span', { className: page === 1 ? "FormStepIcon is-active" : "FormStepIcon is-passed", __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('span', { className: 'FormStepIcon-circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }))), _react2.default.createElement('li', { className: 'FormStepList-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('span', { className: page === 2 && "FormStepIcon is-active" || page === 1 && 'FormStepIcon' || page === 3 && 'FormStepIcon is-passed', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('span', { className: 'FormStepIcon-circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })))), page === 1 && _react2.default.createElement(_FirstPage2.default, { onSubmit: this.nextPage, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), page === 2 && _react2.default.createElement(_MiddlePage2.default, { onSubmit: this.nextPage, previousPage: this.previousPage, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), page === 3 && _react2.default.createElement(_LastPage2.default, { onSubmit: onSubmit, previousPage: this.previousPage, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }));
    }
  }]);

  return Form;
}(_react.Component);

exports.default = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiRmlyc3RQYWdlIiwiTWlkZGxlUGFnZSIsIkxhc3RQYWdlIiwiRm9ybSIsInByb3BzIiwic3RhdGUiLCJwYWdlIiwibmV4dFBhZ2UiLCJiaW5kIiwicHJldmlvdXNQYWdlIiwic2V0U3RhdGUiLCJvblN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU87Ozs7Ozs7SUFFRCxBO2dDQUNKOztnQkFBQSxBQUFZLE9BQU87d0NBQUE7O2tJQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO1lBQUwsQUFBYSxBQUNMLEFBR1I7QUFKYSxBQUNYOztVQUdGLEFBQUssV0FBVyxNQUFBLEFBQUssU0FBTCxBQUFjLEtBQTlCLEFBQ0E7VUFBQSxBQUFLLGVBQWUsTUFBQSxBQUFLLGFBQUwsQUFBa0IsS0FQckIsQUFPakI7V0FDRDs7Ozs7K0JBRVUsQUFDVDtXQUFBLEFBQUs7Y0FDRyxLQUFBLEFBQUssTUFBTCxBQUFXLE9BRG5CLEFBQWMsQUFDWSxBQUUzQjtBQUhlLEFBQ1o7Ozs7bUNBSVcsQUFDYjtXQUFBLEFBQUs7Y0FDRyxLQUFBLEFBQUssTUFBTCxBQUFXLE9BRG5CLEFBQWMsQUFDWSxBQUUzQjtBQUhlLEFBQ1o7Ozs7NkJBSUs7VUFBQSxBQUNBLFdBQVksS0FEWixBQUNpQixNQURqQixBQUNBO1VBREEsQUFFQSxPQUFRLEtBRlIsQUFFYSxNQUZiLEFBRUEsQUFFUDs7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxrQkFBSyxBQUFTLElBQVQsQUFBYSxlQURwQixBQUNFLEFBQWlDLEFBQ2pDLDJCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsVUFBTSxXQUFXLFNBQUEsQUFBUyxJQUFULEFBQWEsd0NBQTlCLEFBQXNFO29CQUF0RTtzQkFBQSxBQUNFO0FBREY7aURBQ1EsV0FBTixBQUFnQjtvQkFBaEI7c0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFHSjtBQUhJOzRCQUdKLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsVUFBTSxXQUFXLFNBQUEsQUFBUyxJQUFULEFBQWEsMkJBQTlCLEFBQXlEO29CQUF6RDtzQkFBQSxBQUNFO0FBREY7aURBQ1EsV0FBTixBQUFnQjtvQkFBaEI7c0JBUk4sQUFNRSxBQUNFLEFBQ0UsQUFHSjtBQUhJOzRCQUdKLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsVUFBTSxXQUFXLFNBQUEsQUFBUyxLQUFULEFBQWMsNEJBQTRCLFNBQUEsQUFBUyxLQUFuRCxBQUF3RCxrQkFBa0IsU0FBQSxBQUFTLEtBQXBHLEFBQXlHO29CQUF6RztzQkFBQSxBQUNFO0FBREY7aURBQ1EsV0FBTixBQUFnQjtvQkFBaEI7c0JBZlIsQUFFRSxBQVdFLEFBQ0UsQUFDRSxBQVdIO0FBWEc7c0JBV0gsQUFBUyxxQkFBSyxBQUFDLHFDQUFVLFVBQVUsS0FBckIsQUFBMEI7b0JBQTFCO3NCQTFCbkIsQUEwQm1CLEFBQ2Q7QUFEYztPQUFBLFlBQ2QsQUFBUyxxQkFBSyxBQUFDLHNDQUFXLFVBQVUsS0FBdEIsQUFBMkIsVUFBVSxjQUFjLEtBQW5ELEFBQXdEO29CQUF4RDtzQkEzQm5CLEFBMkJtQixBQUNkO0FBRGM7T0FBQSxZQUNkLEFBQVMscUJBQUssQUFBQyxvQ0FBUyxVQUFWLEFBQW9CLFVBQVUsY0FBYyxLQUE1QyxBQUFpRDtvQkFBakQ7c0JBN0JyQixBQUNFLEFBNEJtQixBQUl0QjtBQUpzQjtPQUFBOzs7OztBQXhETixBLEFBK0RuQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJGb3JtLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2plY3RzL1N0YXJPZlNlcnZpY2UtcmVhY3QuanMifQ==