"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyUser = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv/config");

var _httpErrors = require("http-errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SECRET_KEY = process.env.SECRET_KEY;

var verifyUser = function verifyUser(req, res, next) {
  var bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(' ');
    var bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

exports.verifyUser = verifyUser;
//# sourceMappingURL=auth.js.map