"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBlog = exports.update = exports.create = exports.readById = exports.readAll = void 0;

var _blogsCollection = _interopRequireDefault(require("../models/blogsCollection"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var readAll = function readAll(req, res) {
  if (!_blogsCollection["default"]) {
    return res.status(404).json({
      status: 404,
      error: 'Blog not accessible'
    });
  }

  return res.status(200).json({
    status: 200,
    blog: 'blogs successfully retrieved',
    data: {
      blogs: _blogsCollection["default"]
    }
  });
};

exports.readAll = readAll;

var readById = function readById(req, res) {
  var id = req.params.id;

  var blog = _blogsCollection["default"].find(function (blog) {
    return blog.id === id;
  });

  if (blog) {
    return res.status(200).json({
      status: 200,
      blog: 'blog successfully retrieved',
      data: blog
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'blog can not be found'
  });
};

exports.readById = readById;

var create = function create(req, res) {
  var blog = {
    id: (0, _uuid.v4)(),
    author: req.body.author,
    title: req.body.title,
    description: req.body.description
  };

  _blogsCollection["default"].push(blog);

  return res.status(201).json({
    status: 201,
    blog: 'blog successfully created',
    data: blog
  });
};

exports.create = create;

var update = function update(req, res) {
  var id = req.params.id;

  var blog = _blogsCollection["default"].find(function (blog) {
    return blog.id === id;
  });

  if (blog) {
    blog.author = req.body.author;
    blog.title = req.body.title;
    blog.description = req.body.description;
    return res.status(200).json({
      status: 200,
      blog: 'blog successfully updated',
      data: blog
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'blog not found'
  });
};

exports.update = update;

var deleteBlog = function deleteBlog(req, res) {
  var id = req.params.id;

  var blog = _blogsCollection["default"].find(function (blog) {
    return blog.id === id;
  });

  if (blog) {
    var a = _blogsCollection["default"].indexOf(blog);

    _blogsCollection["default"].splice(a, 1);

    return res.status(200).json({
      status: 200,
      blog: 'blog successfully deleted',
      data: blog
    });
  }

  return res.status(404).json({
    status: 404,
    error: 'blog not found'
  });
};

exports.deleteBlog = deleteBlog;
//# sourceMappingURL=blogsControllers.js.map