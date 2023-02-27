import express, { Request, Response } from 'express';
import { userCreate, getUser } from '../controllers/userController';

const userRouter = express.Router();

// userRouter.post('/login', (userAuth))
userRouter.post('/user/add', (userCreate));
// userRouter.post('/user/login', (loginUser));
// userRouter.post('/user/logout', (userLogout));
 userRouter.get('/user/:id', (getUser));

export default userRouter;