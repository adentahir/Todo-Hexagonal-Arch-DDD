import express, { Request, Response } from "express";
import TodoController from "../controllers/todoController";

export const getTodoRouter = (todoController: TodoController) => {
	const todoRouter = express.Router();

	todoRouter.get("/", todoController.getAll);
	todoRouter.get("/todos/:id", todoController.todoShow);
	todoRouter.post("/todos/add", todoController.todoCreate);
	todoRouter.put("/todos/:id", todoController.todoUpdate);
	todoRouter.delete("/todos/:id", todoController.deleteTodo);

	return todoRouter;
};
