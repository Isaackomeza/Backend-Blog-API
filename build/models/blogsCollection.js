"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var blogs = [{
  author: 'Isaac Komeza',
  title: 'How to study javascript in one day',
  description: 'For sure you can not fjesb cfewhsbjvbfjvabijvbsjvfbjwbnsfjnbwobhsonw'
}, {
  author: 'Komeza',
  title: 'How to study html in one day',
  description: 'For sure you can not fjesb cfewhsbjvbfjvabijvbsjvfbjwbnsfjnbwobhsonw'
}];
blogs = blogs.map(blog => ({
  id: (0, _uuid.v4)(),
  ...blog
}));
var _default = blogs;
exports.default = _default;