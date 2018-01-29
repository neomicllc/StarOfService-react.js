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

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _reactAnimations = require('react-animations');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Projects\\StarOfService-react.js\\components\\Form.js';


var styles = {
  slideInRight: {
    animation: 'x 1s',
    animationName: _radium2.default.keyframes(_reactAnimations.slideInRight, 'slideInRight')
  }
};

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

      return _react2.default.createElement(_radium.StyleRoot, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Star of Service'), _react2.default.createElement('link', { href: '../static/progressBar.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), _react2.default.createElement('div', { className: 'container', style: styles.slideInRight, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, page === 3 ? 'Thank You!' : 'Signup'), _react2.default.createElement('ol', { className: 'FormStepList', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('li', { className: 'FormStepList-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('span', { className: page === 1 ? "FormStepIcon is-active && is-passed" : "FormStepIcon is-passed", __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('span', { className: 'FormStepIcon-circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }))), _react2.default.createElement('li', { className: 'FormStepList-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('span', { className: page === 1 ? "FormStepIcon is-active" : "FormStepIcon is-passed", __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('span', { className: 'FormStepIcon-circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }))), _react2.default.createElement('li', { className: 'FormStepList-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('span', {
        className: page === 2 && "FormStepIcon is-active" || page === 1 && 'FormStepIcon' || page === 3 && 'FormStepIcon is-passed', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('span', { className: 'FormStepIcon-circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })))), page === 1 && _react2.default.createElement(_FirstPage2.default, { onSubmit: this.nextPage, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), page === 2 && _react2.default.createElement(_MiddlePage2.default, { onSubmit: this.nextPage, previousPage: this.previousPage, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), page === 3 && _react2.default.createElement(_LastPage2.default, { onSubmit: onSubmit, previousPage: this.previousPage, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })));
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  onSubmit: _propTypes2.default.func.isRequired
};

exports.default = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJGaXJzdFBhZ2UiLCJNaWRkbGVQYWdlIiwiTGFzdFBhZ2UiLCJIZWFkIiwic2xpZGVJblJpZ2h0IiwiUmFkaXVtIiwiU3R5bGVSb290Iiwic3R5bGVzIiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uTmFtZSIsImtleWZyYW1lcyIsIkZvcm0iLCJwcm9wcyIsInN0YXRlIiwicGFnZSIsIm5leHRQYWdlIiwiYmluZCIsInByZXZpb3VzUGFnZSIsInNldFN0YXRlIiwib25TdWJtaXQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU87Ozs7QUFDUCxBQUFROztBQUNSLEFBQU8sQUFBUzs7Ozs7Ozs7O0FBRWhCLElBQU07O2VBQ1UsQUFDRCxBQUNYO21CQUFlLGlCQUFBLEFBQU8sQUFBVSx5Q0FIcEMsQUFBZSxBQUNDLEFBRUcsQUFBK0I7QUFGbEMsQUFDWjtBQUZXLEFBQ2I7O0lBTUksQTtnQ0FDSjs7Z0JBQUEsQUFBWSxPQUFPO3dDQUFBOztrSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztZQUFMLEFBQWEsQUFDTCxBQUdSO0FBSmEsQUFDWDs7VUFHRixBQUFLLFdBQVcsTUFBQSxBQUFLLFNBQUwsQUFBYyxLQUE5QixBQUNBO1VBQUEsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBUHJCLEFBT2pCO1dBQ0Q7Ozs7OytCQUVVLEFBQ1Q7V0FBQSxBQUFLO2NBQ0csS0FBQSxBQUFLLE1BQUwsQUFBVyxPQURuQixBQUFjLEFBQ1ksQUFFM0I7QUFIZSxBQUNaOzs7O21DQUlXLEFBQ2I7V0FBQSxBQUFLO2NBQ0csS0FBQSxBQUFLLE1BQUwsQUFBVyxPQURuQixBQUFjLEFBQ1ksQUFFM0I7QUFIZSxBQUNaOzs7OzZCQUlLO1VBQUEsQUFDQSxXQUFZLEtBRFosQUFDaUIsTUFEakIsQUFDQTtVQURBLEFBRUEsT0FBUSxLQUZSLEFBRWEsTUFGYixBQUVBLEFBRVA7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDREQUFNLE1BQU4sQUFBVyw2QkFBNEIsS0FBdkMsQUFBMkM7b0JBQTNDO3NCQUhKLEFBQ0UsQUFFRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxTQUFLLFdBQUwsQUFBZSxhQUFZLE9BQU8sT0FBbEMsQUFBeUM7b0JBQXpDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxrQkFBSyxBQUFTLElBQVQsQUFBYSxlQURwQixBQUNFLEFBQWlDLEFBQ2pDLDJCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUEsVUFBTSxXQUFXLFNBQUEsQUFBUyxJQUFULEFBQWEsd0NBQTlCLEFBQXNFO29CQUF0RTtzQkFBQSxBQUNFO0FBREY7aURBQ1EsV0FBTixBQUFnQjtvQkFBaEI7c0JBSEosQUFDRSxBQUNBLEFBQ0UsQUFHRjtBQUhFOzRCQUdGLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUEsVUFBTSxXQUFXLFNBQUEsQUFBUyxJQUFULEFBQWEsMkJBQTlCLEFBQXlEO29CQUF6RDtzQkFBQSxBQUNFO0FBREY7aURBQ1EsV0FBTixBQUFnQjtvQkFBaEI7c0JBUkosQUFNRSxBQUNBLEFBQ0UsQUFHRjtBQUhFOzRCQUdGLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUE7bUJBQ2EsU0FBQSxBQUFTLEtBQVQsQUFBYyw0QkFBNEIsU0FBQSxBQUFTLEtBQW5ELEFBQXdELGtCQUFrQixTQUFBLEFBQVMsS0FEaEcsQUFDcUc7b0JBRHJHO3NCQUFBLEFBRUU7QUFGRjtBQUNFLGlEQUNNLFdBQU4sQUFBZ0I7b0JBQWhCO3NCQWhCTixBQUVFLEFBV0UsQUFDQSxBQUVFLEFBS0g7QUFMRztzQkFLSCxBQUFTLHFCQUFLLEFBQUMscUNBQVUsVUFBVSxLQUFyQixBQUEwQjtvQkFBMUI7c0JBckJqQixBQXFCaUIsQUFDZDtBQURjO09BQUEsWUFDZCxBQUFTLHFCQUFLLEFBQUMsc0NBQVcsVUFBVSxLQUF0QixBQUEyQixVQUFVLGNBQWMsS0FBbkQsQUFBd0Q7b0JBQXhEO3NCQXRCakIsQUFzQmlCLEFBQ2Q7QUFEYztPQUFBLFlBQ2QsQUFBUyxxQkFBSyxBQUFDLG9DQUFTLFVBQVYsQUFBb0IsVUFBVSxjQUFjLEtBQTVDLEFBQWlEO29CQUFqRDtzQkE3QnJCLEFBQ0UsQUFLRSxBQXVCaUIsQUFLdEI7QUFMc0I7T0FBQTs7Ozs7QSxBQXhETjs7QUFnRW5CLEtBQUEsQUFBSztZQUNPLG9CQUFBLEFBQVUsS0FEdEIsQUFBaUIsQUFDVSxBQUczQjtBQUppQixBQUNmOztrQkFHRixBQUFlIiwiZmlsZSI6IkZvcm0uanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvU3Rhck9mU2VydmljZS1yZWFjdC5qcyJ9