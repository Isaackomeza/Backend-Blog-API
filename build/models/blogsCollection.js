"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var blogs = [{
  author: 'Isaac Komeza',
  title: 'How to study javascript in one day',
  description: 'For sure you can not fjesb cfewhsbjvbfjvabijvbsjvfbjwbnsfjnbwobhsonw'
}, {
  author: 'Komeza',
  title: 'How to study html in one day',
  description: 'For sure you can not fjesb cfewhsbjvbfjvabijvbsjvfbjwbnsfjnbwobhsonw'
}];
blogs = blogs.map(function (blog) {
  return _objectSpread({
    id: (0, _uuid.v4)()
  }, blog);
});
var _default = blogs;
exports["default"] = _default;
//# sourceMappingURL=blogsCollection.js.map