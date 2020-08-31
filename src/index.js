import express from 'express';
import mongoose from 'mongoose';
const userRoutes = require('./routes/user');
require("dotenv").config();



import bodyParser from 'body-parser'

import Mroute from './routes/messagesRoutes';
import Blogroute from './routes/blogsRoutes';
import Commentroute from './routes/commentsRoutes';

const db = 'mongodb+srv://Isaac:' + process.env.MONGO_ATLAS_PWD + '@cluster0.se57y.mongodb.net/Mydatabase?retryWrites=true&w=majority'

mongoose.connect( db,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true} )
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));


const server = express();

const port = process.env.PORT || 5000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.get('/', (req, res) => res.status(200).json({ 
    message: 'Welcome to my site' 
}));
server.use('/', Mroute);
server.use('/', Blogroute);
server.use('/', Commentroute);
server.use("/user", userRoutes);


server.use(async (req, res) => {
    const error = await new Error('Not found');
    error.status = 404;
    res.send({status: error.status, message: error.message});
});


server.listen(port, console.log(`server listening on ${port}`));
export default server;