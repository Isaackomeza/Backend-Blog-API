

import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    email:{type: String, required: true },
    phone:String,
    message:{type: String, required: true }
});
module.exports = mongoose.model('Message', messageSchema)