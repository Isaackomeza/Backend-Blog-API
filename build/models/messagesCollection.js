"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var messages = [{
  name: 'Isaac Komezusenge',
  email: 'isaackomeza@gmail.com',
  phone: '0788620148',
  message: 'test if it is working'
}, {
  name: 'Isaac',
  email: 'isaac@gmail.com',
  phone: '078888888',
  message: 'Good morning?'
}];
messages = messages.map(message => ({
  id: (0, _uuid.v4)(),
  ...message
}));
var _default = messages;
exports.default = _default;