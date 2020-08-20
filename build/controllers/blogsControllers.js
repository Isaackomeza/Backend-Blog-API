"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBlog = exports.update = exports.create = exports.readById = exports.readAll = void 0;

var _blogsCollection = _interopRequireDefault(require("../models/blogsCollection"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const readAll = (req, res) => {
  if (!_blogsCollection.default) {
    return res.status(404).json({
      status: 404,
      error: 'Blog not accessible'
    });
  }

  return res.status(200).json({
    status: 200,
    blog: 'blogs successfully retrieved',
    data: {
      blogs: _blogsCollection.default
    }
  });
};

exports.readAll = readAll;

const readById = (req, res) => {
  const id = req.params.id;

  const blog = _blogsCollection.default.find(blog => {
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

const create = (req, res) => {
  const blog = {
    id: (0, _uuid.v4)(),
    author: req.body.author,
    title: req.body.title,
    description: req.body.description
  };

  _blogsCollection.default.push(blog);

  return res.status(201).json({
    status: 201,
    blog: 'blog successfully created',
    data: blog
  });
};

exports.create = create;

const update = (req, res) => {
  const id = req.params.id;

  const blog = _blogsCollection.default.find(blog => {
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

const deleteBlog = (req, res) => {
  const id = req.params.id;

  const blog = _blogsCollection.default.find(blog => {
    return blog.id === id;
  });

  if (blog) {
    var a = _blogsCollection.default.indexOf(blog);

    _blogsCollection.default.splice(a, 1);

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