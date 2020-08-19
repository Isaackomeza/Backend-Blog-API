import express from 'express';
import {create,readAll,readById,update,deleteComment} from '../controllers/commentsControllers';

const router = express.Router();
router.post('/comment', create);
router.get('/comment', readAll);
router.get('/comment/:id', readById);
router.put('/comment/:id', update);
router.delete('/comment/:id', deleteComment);
export default router;
