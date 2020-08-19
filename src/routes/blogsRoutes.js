import express from 'express';
import {create, readAll, readById, update, deleteBlog} from '../controllers/blogsControllers';

const router = express.Router();
router.post('/blog', create);
router.get('/blog', readAll);
router.get('/blog/:id', readById);
router.put('/blog/:id', update);
router.delete('/blog/:id', deleteBlog);
export default router;
