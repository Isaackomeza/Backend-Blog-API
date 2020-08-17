import express from 'express';
import {create, readAll, readById, update, deleteUser} from '../controllers/users-controllers';

const router = express.Router();
router.post('/user', create);
router.get('/user', readAll);
router.get('/user/:id', readById);
router.put('/user/:id', update);
router.delete('/user/:id', deleteUser);
export default router;
