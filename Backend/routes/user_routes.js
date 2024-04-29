import express from 'express'
import { getUserbyId, postUser, updateUser, delUser } from '../controllers/userController.js';

const router = express.Router()

//Routes
// router.post('/path', controller);
router.get('/:id', getUserbyId);
router.get('/post', postUser);
router.get('/update/:id', updateUser);
router.get('/del/:id', delUser);

export default router;