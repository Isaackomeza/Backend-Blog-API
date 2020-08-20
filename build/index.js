"use strict";

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _httpErrors = require("http-errors");

var _messagesRoutes = _interopRequireDefault(require("./routes/messagesRoutes"));

var _blogsRoutes = _interopRequireDefault(require("./routes/blogsRoutes"));

var _usersRoutes = _interopRequireDefault(require("./routes/usersRoutes"));

var _commentsRoutes = _interopRequireDefault(require("./routes/commentsRoutes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _express.default)();
const port = process.env.PORT || 3000;
server.use(_express.default.json());
server.use(_express.default.urlencoded({
  extended: false
}));
server.get('/', (req, res) => res.status(200).json({
  message: 'Welcome to my site'
}));
server.use('/', _messagesRoutes.default);
server.use('/', _blogsRoutes.default);
server.use('/', _usersRoutes.default);
server.use('/', _commentsRoutes.default);
server.use('/', _auth.default);
server.use(async (req, res) => {
  const error = await new Error('Not found');
  error.status = 404;
  res.send({
    status: error.status,
    message: error.message
  });
});
server.listen(port, console.log(`server listening on ${port}`));
var _default = server;
exports.default = _default;