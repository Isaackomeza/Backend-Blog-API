import express from 'express';
import Mroute from './routes/messages-routes';
import Blogroute from './routes/blogs-routes';
import Userroute from './routes/users-routes';
import Commentroute from './routes/comments-routes';

const server = express();

const port = process.env.PORT || 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.get('/', (req, res) => res.status(200).json({ message: 'Welcome to my brand' }));
server.use('/', Mroute);
server.use('/', Blogroute);
server.use('/', Userroute);
server.use('/', Commentroute);

server.listen(port, console.log(`server listening on ${port}`));
export default server;