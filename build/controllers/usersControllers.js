"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.update = exports.create = exports.readById = exports.readAll = void 0;

var _usersCollection = _interopRequireDefault(require("../models/usersCollection"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const readAll = (req, res) => {
  if (!_usersCollection.default) {
    return res.status(404).json({
      status: 404,
      error: 'No User found'
    });
  }

  return res.status(200).json({
    status: 200,
    message: 'users successfully retrieved',
    data: {
      users: _usersCollection.default
    }
  });
};

exports.readAll = readAll;

const readById = (req, res) => {
  const id = req.params.id;

  const user = _usersCollection.default.find(user => {
    return user.id === id;
  });

  if (user) {
    return res.status(200).json({
      status: 200,
      message: 'user successfully retrieved',
      data: user
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'user not found'
  });
};

exports.readById = readById;

const create = (req, res) => {
  const user = {
    id: (0, _uuid.v4)(),
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: 'user'
  };

  _usersCollection.default.push(user);

  return res.status(201).json({
    status: 201,
    message: 'user successfully created',
    data: user
  });
};

exports.create = create;

const update = (req, res) => {
  const id = req.params.id;

  const user = _usersCollection.default.find(user => {
    return user.id === id;
  });

  if (user) {
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    return res.status(200).json({
      status: 200,
      message: 'user successfully updated',
      data: user
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'user not found'
  });
};

exports.update = update;

const deleteUser = (req, res) => {
  const id = req.params.id;

  const user = _usersCollection.default.find(user => {
    return user.id === id;
  });

  if (user) {
    var a = _usersCollection.default.indexOf(user[0]);

    _usersCollection.default.splice(a, 1);

    return res.status(200).json({
      status: 200,
      message: 'user successfully deleted',
      data: user
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'user not found'
  });
};

exports.deleteUser = deleteUser;