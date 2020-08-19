"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _httpErrors = require("http-errors");

var _messagesRoutes = _interopRequireDefault(require("./routes/messagesRoutes"));

var _blogsRoutes = _interopRequireDefault(require("./routes/blogsRoutes"));

var _usersRoutes = _interopRequireDefault(require("./routes/usersRoutes"));

var _commentsRoutes = _interopRequireDefault(require("./routes/commentsRoutes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var server = (0, _express["default"])();
var port = process.env.PORT || 3000;
server.use(_express["default"].json());
server.use(_express["default"].urlencoded({
  extended: false
}));
server.get('/', function (req, res) {
  return res.status(200).json({
    message: 'Welcome to my site'
  });
});
server.use('/', _messagesRoutes["default"]);
server.use('/', _blogsRoutes["default"]);
server.use('/', _usersRoutes["default"]);
server.use('/', _commentsRoutes["default"]);
server.use('/', _auth["default"]);
server.use( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var error;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Error('Not found');

          case 2:
            error = _context.sent;
            error.status = 404;
            res.send({
              status: error.status,
              message: error.message
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
server.listen(port, console.log("server listening on ".concat(port)));
var _default = server;
exports["default"] = _default;
//# sourceMappingURL=index.js.map