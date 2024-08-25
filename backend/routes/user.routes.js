import express from 'express';
import { logoutUser, registerUser, userLogin } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', userLogin);
userRouter.get('/logout', logoutUser);

export default userRouter;