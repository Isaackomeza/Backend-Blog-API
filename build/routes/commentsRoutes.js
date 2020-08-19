"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _commentsControllers = require("../controllers/commentsControllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/comment', _commentsControllers.create);
router.get('/comment', _commentsControllers.readAll);
router.get('/comment/:id', _commentsControllers.readById);
router.put('/comment/:id', _commentsControllers.update);
router["delete"]('/comment/:id', _commentsControllers.deleteComment);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=commentsRoutes.js.map