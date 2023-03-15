import TodoController from "../web/controllers/todoController";
import TodoService from "../application/todo/todoService";
import UserService from "../application/user/userService";
import UserController from "../web/controllers/userController";

import { getTodoRouter } from "../web/routes/todoRouter";
import TodoRepositoryPrisma from "./repositories/todoRepositoryPrisma";
import TodoRepository from "@domain/entities/todo/todo.repository";
import { UserRepository } from "@domain/pseudo-entities/user/user.repository";
import { UserRepositoryPrisma } from "./repositories/user.repository.prisma";
import { PrismaClient } from "@prisma/client";

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
	// init client
	let client: PrismaClient;

	const di: Repos = {
		todoRepository: new TodoRepositoryPrisma(),
		userRepository: new UserRepositoryPrisma(client),
	};

	return di;
}
