"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv/config");

var _auth = require("../middlewares/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  SECRET_KEY
} = process.env;

const route = _express.default.Router();

route.post('/posts', _auth.verifyUser, (req, res) => {
  _jsonwebtoken.default.verify(req.token, 'SECRET_KEY', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created .....',
        authData
      });
    }
  });
}); // route.get('/posts',verifyUser, (req, res)=>{
//     res.json(posts.filter(post => post.username === req.user.username))
// })

route.post('/login', (req, res) => {
  const user = {
    username: 'isaackomeza',
    email: 'isaackomeza@gmail.com'
  }; // const username = req.body.username;
  // const email = req.body.email;
  // const user = {username, email};

  _jsonwebtoken.default.sign({
    user
  }, 'SECRET_KEY', (err, token) => {
    res.json({
      token
    });
  });
});
var _default = route;
exports.default = _default;