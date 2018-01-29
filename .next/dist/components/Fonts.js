'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fontfaceobserver = require('fontfaceobserver');

var _fontfaceobserver2 = _interopRequireDefault(_fontfaceobserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fonts = function Fonts() {
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  var roboto = new _fontfaceobserver2.default('Roboto');

  roboto.load().then(function () {
    document.documentElement.classList.add('roboto');
  });
};

exports.default = Fonts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvbnRzLmpzIl0sIm5hbWVzIjpbIkZvbnRGYWNlT2JzZXJ2ZXIiLCJGb250cyIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwicmVsIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicm9ib3RvIiwibG9hZCIsInRoZW4iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBTSxRQUFRLFNBQVIsQUFBUSxRQUFNLEFBQ2xCO01BQU0sT0FBTyxTQUFTLEFBQVQsY0FBdUIsQUFBdkIsQUFBYixBQUNBO09BQUssQUFBTCxPQUFZLEFBQVosQUFDQTtPQUFLLEFBQUwsTUFBVyxBQUFYLEFBRUE7O1dBQVMsQUFBVCxLQUFjLEFBQWQsWUFBMEIsQUFBMUIsQUFFQTs7TUFBTSxTQUFTLEFBQUksQUFBSiwrQkFBcUIsQUFBckIsQUFBZixBQUVBOztTQUFPLEFBQVAsT0FBYyxBQUFkLEtBQW1CLFlBQU0sQUFDdkI7YUFBUyxBQUFULGdCQUF5QixBQUF6QixVQUFtQyxBQUFuQyxJQUF1QyxBQUF2QyxBQUNEO0FBRkQsQUFHRDtBQVpELEFBY0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiRm9udHMuanMiLCJzb3VyY2VSb290IjoiRDovUHJvamVjdHMvU3Rhck9mU2VydmljZS1yZWFjdC5qcyJ9