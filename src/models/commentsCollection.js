// import mongoose from 'mongoose';
const mongoose = require('mongoose');


const commentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true },
    email: {type: String, required: true },
    comment: {type: String, required: true }
});
module.exports = mongoose.model('Comment', commentSchema)