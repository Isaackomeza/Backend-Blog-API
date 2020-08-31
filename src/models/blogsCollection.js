

import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  author: {type: String, required: true },
  title: {type: String, required: true },
  description: {type: String, required: true }
});
module.exports = mongoose.model('Blog', blogSchema)