import express from "express";
import UserController from "../controllers/userController";
import signInWithGoogle from "../../infrastructure/auth/authController";

export const getUserRouter = (userController: UserController) => {
	const userRouter = express.Router();
	userRouter.get("/users/:id", userController.getUser);
	userRouter.post("/users/add", userController.userCreate);
	userRouter.get("/auth/google", async (req, res) => {
		const idToken = req.body.idToken as string;
		const user = await signInWithGoogle(idToken);
		res.status(200).json(user);
	});
	userRouter.post("/auth/google", userController.createGoogleUser);

	return userRouter;
};
