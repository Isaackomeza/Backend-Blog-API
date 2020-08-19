"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _messagesControllers = require("../controllers/messagesControllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/message', _messagesControllers.create);
router.get('/message', _messagesControllers.readAll);
router.get('/message/:id', _messagesControllers.readById);
router.put('/message/:id', _messagesControllers.update);
router["delete"]('/message/:id', _messagesControllers.deleteMessage);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=messagesRoutes.js.map