import express from 'express';
import {create,readAll,readById,update,deleteMessage} from '../controllers/messagesControllers';

const router = express.Router();
router.post('/message', create);
router.get('/message', readAll);
router.get('/message/:messageId', readById);
router.put('/message/:messageId', update);
router.delete('/message/:messageId', deleteMessage);
export default router;
