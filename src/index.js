import express from 'express';
import Mroute from './routes/messages-routes';

const server = express();

const port = process.env.PORT || 3000;
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.get('/', (req, res) => res.status(200).json({ message: 'Welcome to my brand' }));
server.use('/', Mroute);
server.listen(port, console.log(`server listening on ${port}`));
export default server;