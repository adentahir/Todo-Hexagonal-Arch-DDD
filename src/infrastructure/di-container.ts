import TodoController from "../web/controllers/todoController";
import TodoRepository from "../domain/todoRepository";
import UserRepository from "../domain/userRepository";
import TodoService from "../application/todo/todoService";
import UserService from "../application/user/userService";
import UserController from "../web/controllers/userController";

import { getTodoRouter } from "../web/routes/todoRouter";
import TodoRepositoryPrisma from "./repositories/todoRepositoryPrisma";
import UserRepositoryPrisma from "./repositories/userRepositoryPrisma";

export interface DIContainer {
	userController: UserController;
	todoController: TodoController;
}

interface Repos {
	todoRepository: TodoRepository;
	userRepository: UserRepository;
}

export const bootstrapDi = (): DIContainer => {
	// instantiate repos  with async await
	const repos: Repos = bootstrapRepos();

	// instantiate services
	const todoService = new TodoService(repos.todoRepository);
	const userService = new UserService(repos.userRepository);

	// instantiate controllers
	const todoController = new TodoController(todoService);
	const userController = new UserController(userService);

	return { todoController, userController };
};

function bootstrapRepos(): Repos {
	const di: Repos = {
		todoRepository: new TodoRepositoryPrisma(),
		userRepository: new UserRepositoryPrisma(),
	};

	return di;
}
