"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var comments = [{
  name: 'Komezusenge',
  email: 'komezusengeisaac@gmail.com',
  comment: 'Thank you for this wonderful blog'
}, {
  name: 'David',
  email: 'david@gmail.com',
  comment: 'Wao!! It is awesome blog '
}];
comments = comments.map(comment => ({
  id: (0, _uuid.v4)(),
  ...comment
}));
var _default = comments;
exports.default = _default;