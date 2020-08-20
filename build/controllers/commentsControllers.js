"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComment = exports.update = exports.create = exports.readById = exports.readAll = void 0;

var _commentsCollection = _interopRequireDefault(require("../models/commentsCollection"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const readAll = (req, res) => {
  if (!_commentsCollection.default) {
    return res.status(404).json({
      status: 404,
      error: 'No comment found'
    });
  }

  return res.status(200).json({
    status: 200,
    comment: 'comments successfully retrieved',
    data: {
      comments: _commentsCollection.default
    }
  });
};

exports.readAll = readAll;

const readById = (req, res) => {
  const id = req.params.id;

  const comment = _commentsCollection.default.find(comment => {
    return comment.id === id;
  });

  if (comment) {
    return res.status(200).json({
      status: 200,
      comment: 'comment successfully retrieved',
      data: comment
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'comment not found'
  });
};

exports.readById = readById;

const create = (req, res) => {
  const comment = {
    id: (0, _uuid.v4)(),
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment
  };

  _commentsCollection.default.push(comment);

  return res.status(201).json({
    status: 201,
    message: 'comment successfully created',
    data: comment
  });
};

exports.create = create;

const update = (req, res) => {
  const id = req.params.id;

  const comment = _commentsCollection.default.find(comment => {
    return comment.id === id;
  });

  if (comment) {
    comment.name = req.body.name;
    comment.email = req.body.email;
    comment.comment = req.body.comment;
    return res.status(200).json({
      status: 200,
      comment: 'comment successfully updated',
      data: comment
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'comment not found'
  });
};

exports.update = update;

const deleteComment = (req, res) => {
  const id = req.params.id;

  const comment = _commentsCollection.default.find(comment => {
    return comment.id === id;
  });

  if (comment) {
    var a = _commentsCollection.default.indexOf(comment);

    _commentsCollection.default.splice(a, 1);

    return res.status(200).json({
      status: 200,
      comment: 'comment successfully deleted',
      data: comment
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'comment not found'
  });
};

exports.deleteComment = deleteComment;