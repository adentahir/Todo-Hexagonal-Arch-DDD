import type { Express } from "express";
import { DIContainer } from "../../infrastructure/di-container";
import { getTodoRouter } from "./todo.router";
import { getUserRouter } from "./user.router";


export const bootstrapRouters = (app: Express, diContainer: DIContainer) => {
	const todoRouter = getTodoRouter(diContainer.todoController);
	const userRouter = getUserRouter(diContainer.userController);

	// add routers to the main app as sub-routers
	app.use(todoRouter);
	app.use(userRouter);
};
