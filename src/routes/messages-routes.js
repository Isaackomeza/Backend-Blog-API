import express from 'express';
import {create,readAll,readById,update,deleteMessage} from '../controllers/messagesController';

const router = express.Router();
router.post('/message', create);
router.get('/message', readAll);
router.get('/message/:id', readById);
router.put('/message/:id', update);
router.delete('/message/:id', deleteMessage);
export default router;
