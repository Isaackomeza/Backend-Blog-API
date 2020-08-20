"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var users = [{
  username: 'isaackomeza',
  email: 'isaackomeza@gmail.com',
  password: 'password',
  role: 'admin'
}, {
  username: 'jpirumva',
  email: 'jp.irumva@gmail.com',
  password: '123456',
  role: 'user'
}];
users = users.map(user => ({
  id: (0, _uuid.v4)(),
  ...user
}));
var _default = users;
exports.default = _default;