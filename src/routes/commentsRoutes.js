import express from 'express';
import { create, readAll, readById, update, deleteComment } from '../controllers/commentsControllers';

const router = express.Router();
router.post('/comment', create);
router.get('/comment', readAll);
router.get('/comment/:commentId', readById);
router.put('/comment/:commentId', update);
router.delete('/comment/:commentId', deleteComment);
export default router;
