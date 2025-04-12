import express from 'express';
import { loginUser, registerUser,adminLogin } from '../controllers/userController.js';

// creates router
const userRouter = express.Router();

// api routes from controller
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)

export default userRouter;