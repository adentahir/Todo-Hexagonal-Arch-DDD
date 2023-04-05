import TodoController from "../web/controllers/todo.controller";
import TodoService from "../application/services/todo.service";
import {UserService} from "@app/services/user.service";
import UserController from "../web/controllers/user.controller";
import TodoRepositoryPrisma from "./repositories/todo.repository.prisma";
import TodoRepository from "@domain/entities/todo/todo.repository";
import { UserRepository } from "@domain/pseudo-entities/user/user.repository";
import { UserRepositoryPrisma } from "./repositories/user.repository.prisma";
import { PrismaClient } from "@prisma/client";
import { EmailService } from "@app/services/external/email/email.service";
import { EmailServiceMailjet } from "./email/email.service.mailjet";


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

	const emailService = new EmailServiceMailjet();
	// instantiate services
	const todoService = new TodoService(repos.todoRepository);
	const userService = new UserService(repos.userRepository, emailService);
	
	// instantiate controllers
	const todoController = new TodoController(todoService);
	const userController = new UserController(userService);

	return { todoController, userController };
};

function bootstrapRepos(): Repos {
	// init client
	let client: PrismaClient;	
		client = new PrismaClient();
	

	const di: Repos = {
		todoRepository: new TodoRepositoryPrisma(client),
		userRepository: new UserRepositoryPrisma(client),
	};

	return di;
}
