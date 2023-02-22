import express, { response } from 'express';
import { Request, Response, NextFunction } from 'express';
import { googleOauthHandler } from '../controllers/authController';

const authRouter = express.Router();

  authRouter.get('/auth/google', googleOauthHandler);

export default authRouter;
