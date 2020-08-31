import express from 'express';
import { create, readAll, readById, update, deleteComment } from '../controllers/commentsControllers';
const checkAuth = require('../middlewares/check-auth');

const router = express.Router();
router.post('/comment', checkAuth, create);
router.get('/comment', readAll);
router.get('/comment/:commentId', readById);
router.put('/comment/:commentId', checkAuth, update);
router.delete('/comment/:commentId', checkAuth, deleteComment);
export default router;
