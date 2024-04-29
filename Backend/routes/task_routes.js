import express from 'express'
import { getAllTask, getTaskbyId, getAllTaskbyUser, getAllTaskbyUserState, postTask, updateTask, delTask } from '../controllers/taskController.js';

const router = express.Router()

//Routes
// router.post('/path', controller);
router.get('/', getAllTask);
router.get('/:id', getTaskbyId);
router.get('/user/:id', getAllTaskbyUser);
router.get('/user/:id/:state', getAllTaskbyUserState);
router.get('/post', postTask);
router.get('/update/:id', updateTask);
router.get('/del/:id', delTask);


export default router;