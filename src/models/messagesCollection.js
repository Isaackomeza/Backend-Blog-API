// import { v4 as uuidv4 } from 'uuid';

// var messages = [{
//     name:'Isaac Komezusenge',
//     email:'isaackomeza@gmail.com',
//     phone:'0788620148',
//     message:'test if it is working'
//     },
//     {
//     name:'Isaac',
//     email:'isaac@gmail.com',
//     phone:'078888888',
//     message:'Good morning?'
//     },
// ];
// messages=messages.map((message)=>({id:uuidv4(), ...message}));
// export default messages;

import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:String,
    message:String
});
module.exports = mongoose.model('Message', messageSchema)