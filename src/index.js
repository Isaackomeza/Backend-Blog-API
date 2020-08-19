import express from 'express';
import {createError} from 'http-errors';
import Mroute from './routes/messagesRoutes';
import Blogroute from './routes/blogsRoutes';
import Userroute from './routes/usersRoutes';
import Commentroute from './routes/commentsRoutes';

const server = express();

const port = process.env.PORT || 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.get('/', (req, res) => res.status(200).json({ 
    message: 'Welcome to my brand' 
}));
server.use('/', Mroute);
server.use('/', Blogroute);
server.use('/', Userroute);
server.use('/', Commentroute);

// server.use((req, res, next) => {
//     next(createError.NotFound('Not found'));
// });
// server.use(async (error, req, res, next) => {
//     res.status = error.status || 404;
//     res.send({status: error.status, message: error.message});
// })
server.use(async (req, res) => {
    const error = await new Error('Not found');
    error.status = 404;
    res.send({status: error.status, message: error.message});
});


server.listen(port, console.log(`server listening on ${port}`));
export default server;