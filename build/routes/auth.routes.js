"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv/config");

var _auth = require("../middlewares/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SECRET_KEY = process.env.SECRET_KEY;

var route = _express["default"].Router();

route.post('/posts', _auth.verifyUser, function (req, res) {
  _jsonwebtoken["default"].verify(req.token, 'SECRET_KEY', function (err, authData) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created .....',
        authData: authData
      });
    }
  });
});
route.post('/login', function (req, res) {
  var user = {
    username: 'isaackomeza',
    email: 'isaackomeza@gmail.com'
  };

  _jsonwebtoken["default"].sign({
    user: user
  }, 'SECRET_KEY', {
    expiresIn: '30s'
  }, function (err, token) {
    res.json({
      token: token
    });
  });
});
var _default = route;
exports["default"] = _default;
//# sourceMappingURL=auth.routes.js.map