// import mongoose from 'mongoose';
const mongoose = require('mongoose');

// import { v4 as uuidv4 } from 'uuid';

// var comments = [{
    
//     name:'Komezusenge',
//     email:'komezusengeisaac@gmail.com',
//     comment:'Thank you for this wonderful blog'
//     },
//     {
    
//     name:'David',
//     email:'david@gmail.com',
//     comment:'Wao!! It is awesome blog '
//     },
// ];
// comments=comments.map((comment)=>({id:uuidv4(), ...comment}));
// export default comments;

const commentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    comment: String
});
module.exports = mongoose.model('Comment', commentSchema)