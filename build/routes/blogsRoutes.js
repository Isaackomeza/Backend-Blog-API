"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _blogsControllers = require("../controllers/blogsControllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/blog', _blogsControllers.create);
router.get('/blog', _blogsControllers.readAll);
router.get('/blog/:id', _blogsControllers.readById);
router.put('/blog/:id', _blogsControllers.update);
router["delete"]('/blog/:id', _blogsControllers.deleteBlog);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=blogsRoutes.js.map