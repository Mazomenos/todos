import express from 'express'
import { getAllHistory, getHistorybyUser, postHistory, delHistory } from '../controllers/historyController.js';

const router = express.Router()

//Routes
// router.post('/path', controller);
router.get('/', getAllHistory);
router.post('/post', postHistory);
router.delete('/del/:id', delHistory);
router.get('/:id', getHistorybyUser);

export default router;