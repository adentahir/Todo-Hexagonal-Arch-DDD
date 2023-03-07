import { Request, Response, NextFunction } from "express";
const express = require("express");
const authRouter = express.Router();
const auth = require("./auth");
const createError = require("http-errors");
authRouter.get("/idx", (req: Request, res: Response) => {
	res.send("Hello World!");
});
authRouter.use("/auth", auth);
authRouter.use(async (req: Request, res: Response, next: NextFunction) => {
	next(createError.NotFound("Route not Found"));
});
authRouter.use((req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({
		status: false,
		message: "Internal Server Error",
	});
});
export default authRouter;
