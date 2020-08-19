"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _usersControllers = require("../controllers/usersControllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/user', _usersControllers.create);
router.get('/user', _usersControllers.readAll);
router.get('/user/:id', _usersControllers.readById);
router.put('/user/:id', _usersControllers.update);
router["delete"]('/user/:id', _usersControllers.deleteUser);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=usersRoutes.js.map