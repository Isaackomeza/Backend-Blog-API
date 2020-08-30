// import { v4 as uuidv4 } from 'uuid';

// var blogs = [{
//     author: 'Isaac Komeza',
//     title: 'How to study javascript in one day',
//     description: 'For sure you can not fjesb cfewhsbjvbfjvabijvbsjvfbjwbnsfjnbwobhsonw',
//   },
//   {
//     author: 'Komeza',
//     title: 'How to study html in one day',
//     description: 'For sure you can not fjesb cfewhsbjvbfjvabijvbsjvfbjwbnsfjnbwobhsonw',
//   },
// ];
// blogs=blogs.map((blog)=>({id:uuidv4(), ...blog}));
// export default blogs;

import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  author: String,
  title: String,
  description: String
});
module.exports = mongoose.model('Blog', blogSchema)