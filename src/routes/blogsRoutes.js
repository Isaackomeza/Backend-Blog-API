import express from 'express';
import {create, readAll, readById, update, deleteBlog} from '../controllers/blogsControllers';
const checkAuth = require('../middlewares/check-auth');

const router = express.Router();
router.post('/blog', checkAuth, create);
router.get('/blog', readAll);
router.get('/blog/:blogId', readById);
router.put('/blog/:blogId', checkAuth, update);
router.delete('/blog/:blogId', checkAuth, deleteBlog);
export default router;
