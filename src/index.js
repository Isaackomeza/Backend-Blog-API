import express from 'express';
import {createError} from 'http-errors';
import mongoose from 'mongoose';



import bodyParser from 'body-parser'

import Mroute from './routes/messagesRoutes';
import Blogroute from './routes/blogsRoutes';
import Userroute from './routes/usersRoutes';
import Commentroute from './routes/commentsRoutes';
import Authroute from './routes/auth.routes';

// mongoose.connect(`mongodb+srv://isaackomeza:${process.env.MONGO_ATLAS_PW}@cluster0.se57y.mongodb.net/Mybackend?retryWrites=true&w=majority`, 
// {
//     userNewUrlParser: true,
//     userUnifiedTopology: true
// });
const db = 'mongodb+srv://Isaac:' + process.env.MONGO_ATLAS_PW + '@cluster0.se57y.mongodb.net/Mydatabase?retryWrites=true&w=majority'

mongoose.connect( db,{ useNewUrlParser: true, useUnifiedTopology: true} );


const server = express();

const port = process.env.PORT || 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.get('/', (req, res) => res.status(200).json({ 
    message: 'Welcome to my site' 
}));
server.use('/', Mroute);
server.use('/', Blogroute);
server.use('/', Userroute);
server.use('/', Commentroute);
server.use('/', Authroute);


server.use(async (req, res) => {
    const error = await new Error('Not found');
    error.status = 404;
    res.send({status: error.status, message: error.message});
});


server.listen(port, console.log(`server listening on ${port}`));
export default server;