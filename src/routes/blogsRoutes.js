import express from 'express';
import {create, readAll, readById, update, deleteBlog} from '../controllers/blogsControllers';

const router = express.Router();
router.post('/blog', create);
router.get('/blog', readAll);
router.get('/blog/:blogId', readById);
router.put('/blog/:blogId', update);
router.delete('/blog/:blogId', deleteBlog);
export default router;
