import express from "express";
//import historyRoutes from "./historyRoutes.js"
import historyRoutes from './history_routes.js'
import taskRoutes from './task_routes.js'
import userRoutes from './user_routes.js'

const router = express.Router()


//Routes
// router.post('/path', controller);
router.get('/', (req,res) => {
	res.send("Hola") 
	console.log("hello")})



router.use('/history', historyRoutes);
router.use('/user', userRoutes);
router.use('/task', taskRoutes)

//404 not found
router.all('*', (req, res) => {
	res.status(404).json({
		status: "Not Found",
		payload: null
	})
});


export default router;