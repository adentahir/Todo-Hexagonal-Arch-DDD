import express from "express";
import UserController from "../controllers/userController";

export const getUserRouter = (userController: UserController) => {
	const userRouter = express.Router();
	userRouter.get("/users/:id", userController.getUser);
	userRouter.post("/users/add", userController.userCreate);

	return userRouter;
};
