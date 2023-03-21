import express from "express";
import UserController from "../controllers/user.controller";

export const getUserRouter = (userController: UserController) => {
	const userRouter = express.Router();
	
	userRouter.post("/users/add", userController.userCreate);
	

	return userRouter;
};
