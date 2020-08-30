import express from 'express';
import {create,readAll,readById,update,deleteMessage} from '../controllers/messagesControllers';
const checkAuth = require('../middlewares/check-auth');

const router = express.Router();
router.post('/message', create);
router.get('/message', checkAuth, readAll);
router.get('/message/:messageId', checkAuth, readById);
router.put('/message/:messageId', checkAuth, update);
router.delete('/message/:messageId', checkAuth,  deleteMessage);
export default router;
