"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMessage = exports.update = exports.create = exports.readById = exports.readAll = void 0;

var _messagesCollection = _interopRequireDefault(require("../models/messagesCollection"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var readAll = function readAll(req, res) {
  if (!_messagesCollection["default"]) {
    return res.status(404).json({
      status: 404,
      error: 'No message found'
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'messages successfully retrieved',
    data: {
      messages: _messagesCollection["default"]
    }
  });
};

exports.readAll = readAll;

var readById = function readById(req, res) {
  var id = req.params.id;

  var message = _messagesCollection["default"].find(function (message) {
    return message.id === id;
  });

  if (message) {
    return res.status(200).json({
      status: 200,
      message: 'message successfully retrieved',
      data: message
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'message not found'
  });
};

exports.readById = readById;

var create = function create(req, res) {
  var message = {
    id: (0, _uuid.v4)(),
    name: req.body.fullname,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  };

  _messagesCollection["default"].push(message);

  return res.status(201).json({
    status: 201,
    message: 'message successfully created',
    data: message
  });
};

exports.create = create;

var update = function update(req, res) {
  var id = req.params.id;

  var message = _messagesCollection["default"].find(function (message) {
    return message.id === id;
  });

  if (message) {
    message.name = req.body.name;
    message.email = req.body.email;
    message.phone = req.body.phone;
    message.message = req.body.message;
    return res.status(200).json({
      status: 200,
      message: 'message successfully updated',
      data: message
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'message not found'
  });
};

exports.update = update;

var deleteMessage = function deleteMessage(req, res) {
  var id = req.params.id;

  var message = _messagesCollection["default"].find(function (message) {
    return message.id === id;
  });

  if (message) {
    var a = _messagesCollection["default"].indexOf(message);

    _messagesCollection["default"].splice(a, 1);

    return res.status(200).json({
      status: 200,
      message: 'message successfully deleted',
      data: message
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'message not found'
  });
};

exports.deleteMessage = deleteMessage;
//# sourceMappingURL=messagesControllers.js.map